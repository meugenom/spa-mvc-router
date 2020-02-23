/* eslint-disable no-new */
'use strict'
import Router from './router/router.js'

// Listen on hash change:
window.addEventListener('hashchange', function () {
  new Router()
})

// Listen on page load:
window.addEventListener('load', function () {
  new Router()
})
