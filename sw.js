if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const d=e=>r(e,o),c={module:{uri:o},exports:l,require:d};s[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(i(...e),l)))}}define(["./workbox-b03bd2db"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BgTt8B0d.css",revision:null},{url:"assets/index-DGNqK9sX.js",revision:null},{url:"assets/searchWorker-CjprzNnf.js",revision:null},{url:"assets/searchWorkerManager-ma72JbGX.js",revision:null},{url:"assets/vendor-qbDcHZsU.js",revision:null},{url:"assets/web-vitals-BhWu73fZ.js",revision:null},{url:"assets/workbox-window.prod.es5-DFjpnwFp.js",revision:null},{url:"favicon.ico",revision:"24e03661810bd7a53057f9d1ce6532c3"},{url:"index.html",revision:"766fbbc3bddda31a9243d9b6d86a3bdb"},{url:"logo192-maskable.png",revision:"8e2be3cd6b2c68e7563afdc10915766a"},{url:"logo192.png",revision:"47d61c48d660e0ac519e89103e76e7ee"},{url:"logo512-maskable.png",revision:"ad9c76f0d98773cda247dda806329c94"},{url:"logo512.png",revision:"c0a7fb295d6827613707fdcc22eb9f25"},{url:"manifest.json",revision:"1c5a3d4c2dd0b89a01e7a9cab2fc2a1d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
