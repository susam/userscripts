// ==UserScript==
// @name Susam's Darken
// @description Darken page with quadruple-click or quadruple-typing of 'ctrl'.
// @version 0.1.0
// @author Susam Pal
// @match *://*/*
// ==/UserScript==

let darkEnabled = false
let lastTriggerTime = 0
let triggerCount = 0
let logEnabled = false

function log () {
  if (logEnabled) {
    console.log.apply(null, arguments)
  }
}

function autoEnableDark () {
  if (window.localStorage.getItem('darken') === 'yes') {
    log('Darkening requested; enabling dark mode ...')
    enableDark()
  }
}

function enableDark () {
  document.body.style.background = '#111'
  document.body.style.filter = 'invert(1) hue-rotate(180deg)'
  for (let img of document.getElementsByTagName('img')) {
    img.style.filter = 'invert(1) hue-rotate(180deg)'
  }
  darkEnabled = true
  localStorage.setItem('darken', 'yes')
  log('Enabled dark mode')
}

function disableDark () {
  document.body.style.background = ''
  document.body.style.filter = ''
  for (let img of document.getElementsByTagName('img')) {
    img.style.filter = ''
  }
  darkEnabled = false
  localStorage.removeItem('darken')
  log('Disabled dark mode')
}

function toggleDark () {
  darkEnabled ? disableDark() : enableDark()
}

function listenToTrigger(e) {
  log('Previous trigger count:', triggerCount)
  let currentTime = new Date().getTime()
  if (currentTime - lastTriggerTime <= 250) {
    triggerCount += 1
  } else {
    triggerCount = 1
  }
  log('Updated trigger count:', triggerCount)
  lastTriggerTime = currentTime
  if (triggerCount == 4) {
    log('Toggling dark mode ...')
    toggleDark()
  }
}

function listenToKeyTrigger (e) {
  if (e.key === 'Control') {
    listenToTrigger()
  }
}

autoEnableDark()
window.addEventListener('click', listenToTrigger)
window.addEventListener('keydown', listenToKeyTrigger)
