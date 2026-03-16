// ==UserScript==
// @name        YTX
// @version     2026.03.16
// @description Hide YT recommendations and shorts
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
    ytd-rich-shelf-renderer { display: none !important}

    /* Home: Video container. */
    yt-lockup-view-model { display: none !important }

    /* Home: 'Explore more topics' header. */
    ytd-chips-shelf-with-video-shelf-renderer { display: none !important }

    /* Video page: Recommendation sidebar. */
    #secondary { display: none !important }

    /* Shorts: Giant container of shorts. */
    ytd-shorts { display: none !important }

    /* Search: Shorts panels with shorts recommendations */
    grid-shelf-view-model { display: none !important }

    /* Search: 'People also search for' panel */
    ytd-horizontal-card-list-renderer { display: none !important }
  `

  /* Pause shorts videos. */
  function watcher () {
    for (const v of document.querySelectorAll('ytd-shorts video')) {
      v.pause()
    }
    setTimeout(watcher, 1000)
  }

  watcher()
})()
