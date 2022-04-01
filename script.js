// ==UserScript==
// @name         filters for stackoverflow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  filters for stackoverflow
// @author       Donald Mok
// @match        **://stackoverflow.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// @homepageURL  https://github.com/donaldxdonald/filters_for_stackoverflow
// ==/UserScript==

(function() {
  'use strict';
  const linkEl = document.createElement('link')
  linkEl.rel = 'stylesheet'
  linkEl.type = 'text/css'
  linkEl.href = 'https://cdn.jsdelivr.net/gh/donaldxdonald/filters_for_stackoverflow@master/style.css'
  document.head.appendChild(linkEl)
})();