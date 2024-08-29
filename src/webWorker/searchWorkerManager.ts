import corpus from '../utils/corpus';
import { cacheName, getFile, getFilePath } from '../utils/files';
import SearchWorker from "./searchWorker.ts?worker";
import { SearchParams, SearchTask, SearchTaskResult, SearchTaskResultComplete, SearchTaskResultLines } from './searchWorker';
import { SearchResultsInProgress, SearchResultsComplete, SearchResultsStatus } from '../utils/Status';
import { isBooleanQueryValid } from './searchBoolean';

export interface SearchResultLines extends SearchTaskResultLines {
  readonly displayHeader: boolean,
}

export interface SearchResults {
  readonly complete: boolean,
  readonly status: SearchResultsStatus,
  readonly progress: number,
  readonly results: readonly SearchResultLines[],
}

type SearchTaskPartial = Omit<SearchTask, "files" | "speakerFiles">;

/**
 * Attempts the following, in order:
 * - Retrieving the file from the cache
 * - Populating the cache with the file
 * - Fetching the file directly
 *
 * Returns a promise of the text of the file.
 */
const loadFile = (collectionKey: string, languageKey: string, fileKey: string) => {
  const url = getFilePath(collectionKey, languageKey, fileKey);
  if (import.meta.env.DEV) {
    console.debug(`Getting ${url} from cache`);
  }
  return (('caches' in self && indexedDB && 'databases' in indexedDB) ? self.caches.open(cacheName).then((cache) => getFile(cache, url))
    .catch((err) => {
      console.error(err);
      console.log(`Could not retrieve ${url} from cache. Fetching directly...`);
      return fetch(url);
    }) : fetch(url))
    .catch((err) => {
      console.error(err);
      return null;
    })
    // Due to a bug, the Vite dev server serves .gz files with `Content-Encoding: gzip`.
    // To work around this, don't bother decompressing the file in the dev environment.
    // https://github.com/vitejs/vite/issues/12266
    .then((res) => res === null ? ''
      : res.blob().then((blob) => import.meta.env.DEV ? new Response(blob.stream()).text()
        : new Response(blob.stream().pipeThrough(new DecompressionStream('gzip'))).text()));
};

self.onmessage = (message: MessageEvent<SearchParams>) => {
  const progressPortionLoading = 0.5;
  const progressPortionProcessing = 0.5;
  const progressPortionCollecting = 0.0;

  const updateStatusInProgress = (status: SearchResultsInProgress, loadingProgress: number, processingProgress: number, collectingProgress: number) => {
    const progress = (loadingProgress * progressPortionLoading) + (processingProgress * progressPortionProcessing) + (collectingProgress * progressPortionCollecting);
    const message: SearchResults = {
      complete: false,
      status: status,
      progress: progress,
      results: [],
    };
    postMessage(message);
  };

  const updateStatusComplete = (status: SearchResultsComplete, results: SearchResultLines[] = []) => {
    const message: SearchResults = {
      complete: true,
      status: status,
      progress: 1.0,
      results: results,
    };
    postMessage(message);
  };

  try {
    const params = message.data;
    updateStatusInProgress('loading', 0, 0, 0);

    // Ensure the regex is valid.
    // If it's invalid, return with that error immediately.
    try {
      if (params.type === 'regex') {
        new RegExp(params.query, params.caseInsensitive ? 'ui' : 'u');
      }
    }
    catch (err) {
      console.error(err);
      updateStatusComplete('regex');
      return;
    }

    // Ensure the boolean expression is valid.
    // If it's invalid, return with that error immediately.
    if (params.type === 'boolean') {
      const result = isBooleanQueryValid(params);
      if (result !== 'success') {
        console.error(result);
        updateStatusComplete(`boolean.${result}`);
        return;
      }
    }

    // Load files
    let taskCount = 0;
    const taskList: SearchTaskPartial[] = [];
    Object.keys(corpus.collections).filter((collectionKey) => params.collections.includes(collectionKey)).forEach((collectionKey) => {
      const collection = corpus.collections[collectionKey];

      // Do not process collection if it does not include any language being searched
      if (params.languages.every((languageKey) => !collection.languages.includes(languageKey))) {
        return;
      }

      // Load all files in all languages in the collection
      collection.files
        .filter((fileKey) => !((fileKey === 'common' && !params.common) || (fileKey === 'script' && !params.script)))
        .forEach((fileKey) => {
          const languages = collection.structured ? collection.languages : collection.languages.filter((languageKey) => params.languages.includes(languageKey));
          if (!collection.structured) {
            languages.forEach((languageKey, languageIndex) => {
              taskList.push({
                index: taskCount + languageIndex,
                params: params,
                collectionKey: collectionKey,
                fileKey: fileKey,
                languages: [languageKey],
              });
            });
          }
          else {
            taskList.push({
              index: taskCount,
              params: params,
              collectionKey: collectionKey,
              fileKey: fileKey,
              languages: languages,
              speaker: collection?.speaker,
              literals: collection?.literals,
            });
          }
          taskCount += languages.length;
        });
    });
    // Check if the combination of collections/languages yielded no files.
    // If it did, return with that error immediately.
    if (taskList.length === 0) {
      updateStatusComplete('noMatch');
      return;
    }

    // Initialize helpers
    let loadedCount = 0;
    let processedCount = 0;
    let collectedCount = 0;
    const calculateProgress = () => [loadedCount / taskCount, processedCount / taskCount, collectedCount / taskList.length] as const;
    const updateProgressLoaded = (file: string) => {
      loadedCount++;
      updateStatusInProgress('loading', ...calculateProgress());
      if (import.meta.env.DEV) {
        console.debug(`Loaded ${loadedCount}/${taskCount}`);
      }
      return file;
    };
    const updateProgressProcessed = () => {
      processedCount++;
      updateStatusInProgress('processing', ...calculateProgress());
      if (import.meta.env.DEV) {
        console.debug(`Processed ${processedCount}/${taskCount}`);
      }
    };
    const updateProgressCollected = () => {
      collectedCount++;
      updateStatusInProgress('collecting', ...calculateProgress());
      if (import.meta.env.DEV) {
        console.debug(`Collected ${collectedCount}/${taskList.length}`);
      }
    };

    let helperError = false;
    let networkError = false;
    const taskResults: SearchTaskResultComplete[] = [];
    const helpers: Worker[] = [];
    const helperOnMessage = (e: MessageEvent<SearchTaskResult>) => {
      // Another helper had an error, no need to process the message
      if (helperError)
        return;

      // Handle message
      const result = e.data;
      if (result.status === 'processing') {
        updateProgressProcessed();
      }
      else if (result.status === 'done') {
        taskResults.push(result);
        updateProgressCollected();

        // Send results if all tasks are done
        if (collectedCount === taskList.length) {
          const results: SearchResultLines[] = [];
          taskResults.sort((a, b) => a.index - b.index);
          let lastCollection = '';
          let lastFile = '';
          taskResults.map((taskResults) => taskResults.result).filter(({lines}) => lines.length > 0).forEach((result) => {
            results.push({...result, displayHeader: result.collection !== lastCollection || result.file !== lastFile});
            lastCollection = result.collection;
            lastFile = result.file;
          });

          // Raise network error if it occurred at the end here
          updateStatusComplete(networkError ? 'network' : 'done', results);
          helpers.forEach((helper) => helper.terminate());
        }
      }
      else { // error caught in searchWorker
        helperError = true;
        updateStatusComplete(result.status);
        helpers.forEach((helper) => helper.terminate());
      }
    };

    // Start helpers
    const numWorkers = Math.max(1, Math.min(taskList.length, (navigator.hardwareConcurrency || 4) - 2));
    for (let i = 0; i < numWorkers; i++) {
      const helper = new SearchWorker();
      helper.onmessage = helperOnMessage;
      helper.onerror = () => {
        // error not caught in searchWorker (such as stack overflow)
        if (!helperError) {
          helperError = true;
          updateStatusComplete('error');
          helpers.forEach((helper) => helper.terminate());
        }
      };
      helpers.push(helper);
    }
    taskList.forEach(async (task, i) => {
      // Due to a bug in Safari, access to cache storage fails in subworkers.
      // To work around this, we need to fetch the files in the manager worker instead.
      const speaker = task.speaker;
      const files = await Promise.all(task.languages.map((languageKey) =>
        loadFile(task.collectionKey, languageKey, task.fileKey).then(updateProgressLoaded)));
      const speakerFiles = speaker === undefined ? undefined : await Promise.all(task.languages.map((languageKey) =>
        loadFile(task.collectionKey, languageKey, speaker.file)));

      if (files.some((file) => file === '') || (speakerFiles && speakerFiles.some((file) => file === ''))) {
        // Network error ocurred, but allow the search to continue
        // Partial results may still be useful even if incomplete
        networkError = true;
      }

      // Another helper had an error while loading, no need to continue
      if (helperError)
        return;

      // Start helper
      const taskFull: SearchTask = {
        ...task,
        files: files,
        speakerFiles: speakerFiles,
      };
      helpers[i % helpers.length].postMessage(taskFull);
    });
  }
  catch (err) {
    console.error(err);
    updateStatusComplete('error');
  }
};
