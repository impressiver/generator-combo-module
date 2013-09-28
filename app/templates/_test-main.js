var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

    paths: {
      'console': '../lib/console-lite'
      // 'jquery': '../lib/jquery',
      // 'underscore': '../lib/underscore',
      // 'backbone': '../lib/backbone',
      // 'mousetrap': '../lib/mousetrap'
    },

    shim: {
      console: {
        exports: 'console'
      }
      // underscore: {
      //   exports: '_'
      // },
      // backbone: {
      //   deps: [
      //     'underscore',
      //     'jquery'
      //   ],
      //   exports: 'Backbone'
      // },
      // liquid: {
      //   exports: 'Liquid'
      // },
      // mousetrap: {
      //   exports: 'Mousetrap'
      // }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
