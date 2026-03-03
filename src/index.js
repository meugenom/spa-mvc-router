/* eslint-disable no-new */
'use strict'
import Router from './router/router.js'

// Intercept link clicks for SPA navigation:
window.addEventListener('click', function (e) {
  const link = e.target.closest('a[href]')
  if (link) {
    const href = link.getAttribute('href')
    if (href.startsWith('/')) {
      e.preventDefault()
      window.history.pushState({}, '', href)
      new Router()
    }
  }
})

// Listen on back/forward navigation:
window.addEventListener('popstate', function () {
  new Router()
})

// Listen on page load:
window.addEventListener('load', function () {
  new Router()
})
