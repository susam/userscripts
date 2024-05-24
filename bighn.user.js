// ==UserScript==
// @name Big HN
// @match https://news.ycombinator.com/*
// ==/UserScript==
const css = window.document.createElement('style')
css.innerText = `
  body, td, a, span, .comment {
    font-size: medium !important;
    line-height: 1.5em !important;
  }
  .spacer {
    height: 1em !important;
  }
`
window.document.head.appendChild(css)
