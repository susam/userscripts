// ==UserScript==
// @name        Big HN
// @version     2026.02.19
// @description Increase font size and spacing on HN
// @author      Susam Pal
// @match       https://news.ycombinator.com/*
// ==/UserScript==
(function () {
  const style = window.document.createElement('style')
  style.textContent = `
    body, td, a, span, .comment {
      font-size: medium !important;
      line-height: 1.5em !important;
    }
    .spacer {
      height: 1em !important;
    }
  `
  window.document.head.appendChild(style)
})()
