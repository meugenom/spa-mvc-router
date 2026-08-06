'use strict'
import Router from './router/router.js'

const router = new Router()

// Intercept link clicks for SPA navigation:
window.addEventListener('click', function (e) {
  const link = e.target.closest('a[href]')
  if (link) {
    const href = link.getAttribute('href')
    if (href.startsWith('/')) {
      e.preventDefault()
      window.history.pushState({}, '', href)
      router.renderPage()
    }
  }
})

// Listen on back/forward navigation:
window.addEventListener('popstate', function () {
  router.renderPage()
})

// Listen on page load:
window.addEventListener('load', function () {
  router.renderPage()
})