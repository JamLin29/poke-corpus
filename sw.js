if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>r(e,l),u={module:{uri:l},exports:o,require:a};s[l]=Promise.all(n.map((e=>u[e]||a(e)))).then((e=>(i(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/CacheManager-Ku_1_5ob.css",revision:null},{url:"assets/CacheManager-w9uCl4R8.js",revision:null},{url:"assets/cacheManagerWorker-Cy-sZAQ6.js",revision:null},{url:"assets/i18n-en-BZ7V4Ag_.js",revision:null},{url:"assets/index-D_dPYMQ0.css",revision:null},{url:"assets/index-DhN-S9bg.js",revision:null},{url:"assets/react-dom-12ThUI0J.js",revision:null},{url:"assets/search-CaByKgjo.css",revision:null},{url:"assets/search-CPKMEMnM.js",revision:null},{url:"assets/searchWorker-CAY5LHq4.js",revision:null},{url:"assets/searchWorkerManager-B-v8Phd-.js",revision:null},{url:"assets/vendor-ACDtxvTX.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.ico",revision:"24e03661810bd7a53057f9d1ce6532c3"},{url:"index.html",revision:"ee218478d995e704ad6c8616b8f0df9e"},{url:"logo192-maskable.png",revision:"8e2be3cd6b2c68e7563afdc10915766a"},{url:"logo192.png",revision:"ca8c7a2c3899d5f66cb4d3a103b5f668"},{url:"logo512-maskable.png",revision:"ad9c76f0d98773cda247dda806329c94"},{url:"logo512.png",revision:"07a21f06fb32d4ef6b4f268ac2c001c1"},{url:"manifest.json",revision:"ecaebc2e9e4e259b2b5d8a3abdb07b8e"},{url:"noscript.css",revision:"3a6a8749374375c63481230f4f9a1187"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
