"use strict";
import  Router from './router/router.js';

/**
 * init file to start our application
 */

// Listen on hash change:
window.addEventListener('hashchange', function(){
    new Router();
});

// Listen on page load:
window.addEventListener('load', function(){
    new Router();
});
