// ==UserScript==
// @name Dark HN
// @match https://news.ycombinator.com/*
// ==/UserScript==
window.document.body.style.background = '#111'
window.document.body.style.filter = 'saturate(0) invert(1) hue-rotate(180deg)'
window.document.getElementsByTagName('td')[0].style.background = '#ccc'
window.document.getElementsByTagName('img')[0].style.filter = 'saturate(0)'
