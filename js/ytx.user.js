// ==UserScript==
// @name        YTX
// @version     2026.02.19
// @description Hide recommendation sidebar and shorts on YouTube.
// @author      Susam Pal
// @match       https://www.youtube.com/*
// ==/UserScript==
(function () {
  const style = document.createElement('style')
  style.textContent = `
    ytd-rich-shelf-renderer { display: none !important }
    ytm-shorts-lockup-view-model { display: none !important }
    yt-lockup-view-model { display: none !important }

    /* Grid of blank panels displays when page is loading */
    ytd-ghost-grid-renderer { display: none !important; }

    /* Topics panel at the top of home page */
    ytd-feed-filter-chip-bar-renderer { display: none !important }

    /* 'Explore more topics' panel in the home page */
    ytd-chips-shelf-with-video-shelf-renderer { display: none !important }

    /* Recommendation sidebar on video page */
    #secondary { display: none !important }
  `
  document.head.appendChild(style)
  function clearShorts () {
    if (window.location.pathname.startsWith('/shorts')) {
      document.body.textContent = ''
    }
  }
  window.addEventListener('yt-navigate-finish', clearShorts)
  clearShorts()
})()
