!function(){"use strict";var e={m:{},u:function(e){return"static/js/"+e+".4e6f01b0.chunk.js"},o:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},p:"/poke-corpus/"};e.b=self.location+"/../../../";var r=JSON.parse('{"s":{"DiamondPearl":{"languages":["qid-ZZ","ja-Hrkt-JP","en-US","en-GB","fr-FR","it-IT","de-DE","es-ES","ko-KR"],"structured":true,"version":null,"files":["msg"]},"Platinum":{"languages":["qid-ZZ","ja-Hrkt-JP","en-US","en-GB","fr-FR","it-IT","de-DE","es-ES","ko-KR"],"structured":true,"version":null,"files":["msg"]},"HeartGoldSoulSilver":{"languages":["qid-ZZ","ja-Hrkt-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR"],"structured":true,"version":null,"files":["msg"]},"BlackWhite":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR"],"structured":true,"version":null,"files":["common","script"]},"Black2White2":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR"],"structured":true,"version":null,"files":["common","script"]},"XY":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR"],"structured":true,"version":null,"files":["common","script"]},"OmegaRubyAlphaSapphire":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR"],"structured":true,"version":null,"files":["common","script"]},"SunMoon":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":null,"files":["common","script"]},"UltraSunUltraMoon":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":null,"files":["common","script"]},"LetsGoPikachuLetsGoEevee":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":null,"files":["common","script"]},"SwordShield":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":"1.3.0","files":["common","script"]},"LegendsArceus":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":"1.1.0","files":["common","script"]},"ScarletViolet":{"languages":["qid-ZZ","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":"1.3.2","files":["common","script"]},"Bank":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":"1.4","files":["turtle"]},"HOME":{"languages":["qid-ZZ","ja-Hrkt-JP","ja-JP","en-US","fr-FR","it-IT","de-DE","es-ES","ko-KR","zh-CN","zh-TW"],"structured":true,"version":"3.0.0","files":["megaturtle"]}}}');self.onmessage=function(t){var s=function(e,r,t,s){postMessage({complete:!1,status:e,progress:.49*r+.49*t+.01*s,resultsLanguages:[],results:[]})},n=function(e){postMessage({complete:!0,status:e,progress:1,resultsLanguages:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],results:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]})};try{var u=t.data;s("loading",0,0,0);var a=0,i=[];Object.keys(r.s).filter((function(e){return u.collections.includes(e)})).forEach((function(e){var t=r.s[e];u.languages.every((function(e){return!t.languages.includes(e)}))||t.files.filter((function(e){return!("common"===e&&!u.common||"script"===e&&!u.script)})).forEach((function(r){i.push({index:a,params:u,collectionKey:e,fileKey:r,languages:t.languages}),a+=t.languages.length}))}));for(var o=0,l=0,c=0,g=[],d=[],f=function(e){var r=e.data;if("loading"===r.status)o++,s("loading",o/a,l/a,c/i.length);else if("processing"===r.status)l++,s("processing",o/a,l/a,c/i.length);else if("done"===r.status){if(g.push(r),c++,s("collecting",o/a,l/a,c/i.length),c===i.length){var t=[],u=[];g.sort((function(e,r){return e.index-r.index})),g.forEach((function(e){void 0!==e.resultLanguages&&void 0!==e.result&&(t.push(e.resultLanguages),u.push(e.result))})),n("done",t,u),d.forEach((function(e){return e.terminate()}))}}else n(r.status),d.forEach((function(e){return e.terminate()}))},h=Math.min(i.length,navigator.hardwareConcurrency-2||4),m=0;m<h;m++){var S=new Worker(new URL(e.p+e.u(534),e.b));S.onmessage=f,d.push(S)}i.forEach((function(e,r){d[r%d.length].postMessage(e)}))}catch(p){console.error(p),n("error")}}}();
//# sourceMappingURL=865.64f1caa7.chunk.js.map