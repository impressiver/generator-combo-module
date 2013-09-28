if (typeof define !== 'function') {
  /*global define:true, require:false, module:false */
  /*jshint latedef:false */
  var define = require('amdefine')(module);
}

define(['console'],
function (console) {
  'use strict';

  console.log('Loading <%= moduleName %>...');

  var <%= moduleName %> = Object.create( {}, {
    hola: {
      value: function () {
        return 'back atcha.';
      }
    }
  });

  return <%= moduleName %>;
});
