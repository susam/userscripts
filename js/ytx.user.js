// ==UserScript==
// @name        YTX
// @version     2026.03.17
// @description Hide recommendations and shorts
// @author      Susam Pal
// @match       https://www.youtube.com/*
// ==/UserScript==
(function () {
  const style = document.createElement('style')
  document.head.appendChild(style)
  style.textContent = `
    /* Home: Topics panel at the top. */
    ytd-feed-filter-chip-bar-renderer { display: none !important }

    /* Home: Playables, Top news, Explore more topics. */
    ytd-rich-section-renderer { display: none !important }

    /* Home: Video container. */
    yt-lockup-view-model { display: none !important }

    /* Video page: Recommendation sidebar. */
    #secondary { display: none !important }

    /* Shorts: Giant container of shorts. */
    ytd-shorts { display: none !important }

    /* Search: Shorts panels with shorts recommendations */
    grid-shelf-view-model { display: none !important }

    /* Search: 'People also search for' panel */
    ytd-horizontal-card-list-renderer { display: none !important }
  `
  function pause () {
    for (const v of document.querySelectorAll('ytd-shorts video')) {
      v.pause()
    }
    setTimeout(pause, 1000)
  }
  pause()
})()
