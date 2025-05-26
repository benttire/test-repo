(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="text-center mt-10">
    <h1 class="text-2xl font-bold mb-4">Technologie Webowe</h1>
    <button id="counter" class="bg-blue-300 p-4 rounded">count</button>
  </div>
`;let c=0;document.querySelector("#counter").addEventListener("click",()=>{c++,document.querySelector("#counter").textContent=`count: ${c}`});
