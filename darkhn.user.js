// ==UserScript==
// @name        Dark HN
// @version     2026.02.19
// @description Dark colour scheme for HN
// @author      Susam Pal
// @match       https://news.ycombinator.com/*
// ==/UserScript==
window.document.body.style.background = '#111'
window.document.body.style.filter = 'saturate(0) invert(1) hue-rotate(180deg)'
window.document.getElementsByTagName('td')[0].style.background = '#ccc'
