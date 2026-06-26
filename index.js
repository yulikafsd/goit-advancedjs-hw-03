import{a as d,S as p,i as n}from"./assets/vendor-XoAq59kn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function g(r){return d.get(`https://pixabay.com/api/?key=30604189-8e45b74ccc7e3af0dfc4ff4c6&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>t.data).catch(t=>{console.error(t)})}const u=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=document.querySelector(".loading-text"),y=({webformatURL:r,largeImageURL:t,tags:o,likes:i,views:e,comments:s,downloads:a})=>`<li class="gallery-item">
    <a class="gallery-link" href="${t}">
    <img
    class="gallery-image"
    src="${r}"
    alt="${o.match(/([^,]+,){0,2}[^,]+/)[0]}"
    loading="lazy"
    />
    <ul class="info-list">
        <li class="info-item">
            <b class="info-label">Likes</b>
            <span class="info-value">${i}</span>
        </li>
        <li class="info-item">
            <b class="info-label">Views</b>
            <span class="info-value">${e}</span>
        </li>
        <li class="info-item">
            <b class="info-label">Comments</b>
            <span class="info-value">${s}</span>
        </li>
        <li class="info-item">
            <b class="info-label">Downloads</b>
            <span class="info-value">${a}</span>
        </li>
    </ul>
    </a>
    </li>`,h=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,className:"custom-lightbox"});function b(r){const t=r.map(o=>y(o)).join("");u.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){u.innerHTML=""}function v(){f.classList.add("visible"),m.classList.add("visible")}function c(){f.classList.remove("visible"),m.classList.remove("visible")}const l=document.querySelector(".form"),S=r=>{r.preventDefault();const t=l.elements["search-text"].value.trim();if(t==""){n.warning({position:"topRight",message:"Your search query is empty. Please try again!"}),l.reset();return}L(),v(),g(t).then(o=>{if(Object.keys(o.hits).length<=0){c(),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}c(),b(o.hits)}).catch(o=>{n.error({position:"topRight",message:o})}),l.reset()};l.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
