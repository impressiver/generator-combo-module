/*!
 * Console Lite
 * https://gist.github.com/impressiver/4343889
 *
 * Stop wayward debug messages from inadvertently jamming up browsers.
 * Setting `localStorage.DEBUG = true` will turn console messages on
 * again, though you still only get partial console functionality
 * (which is intentional).
 *
 * Copyright 2013 Impressiver LLC
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */

(function(w) {
  "use strict";

  var wC = w.console, rC = {}, lS = w.localStorage,
      fs = ["log", "error", "warn", "info", "debug", "dir", "trace", "time", "timeEnd"],
      isD = function() { return (!!(lS && lS.DEBUG)); }, noop = function(){}, i;

  for (i in fs) {
    rC[fs[i]] = (!!wC && isD()) ? wC[fs[i]].bind(wC) : noop;
  }

  window.console = rC;
  return rC;
})(window);
