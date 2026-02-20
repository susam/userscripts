// ==UserScript==
// @name        No HN
// @version     2026.02.19
// @description Replace HN with blank page.
// @author      Susam Pal
// @match       https://news.ycombinator.com/*
// ==/UserScript==
window.document.body.textContent = ''
