async function o(r,e={},n){return window.__TAURI_INTERNALS__.invoke(r,e,n)}async function t(r,e){await o("plugin:clipboard-manager|write_text",{label:e?.label,text:r})}export{t as writeText};
//# sourceMappingURL=index-7f5zCr5K.js.map
