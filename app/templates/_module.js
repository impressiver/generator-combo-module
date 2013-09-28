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