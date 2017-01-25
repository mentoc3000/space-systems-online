'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-mocha-reporter')
    ],
/*
    client: {
      // builtPaths: [appBase, testingBase], // add more spec base paths as needed
      buildPaths: [clientBase],
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
*/
/*
    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    */

    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

      // { pattern: 'client/systemjs.config.js', included: false, watched: false },
      // { pattern: 'client/systemjs.config.extras.js', included: false, watched: false },
      { pattern: 'karma-test-shim.js', included: true, watched: true },// optionally extend SystemJS mapping e.g., with barrels
      'bower_components/jquery/dist/jquery.js',

      // transpiled application & spec code paths loaded via module imports
      { pattern: 'client/**/*.js', included: false, watched: true },
      { pattern: 'client/**/*.ts', included: false, watched: true },
      { pattern: 'client/**/*.js.map', included: false, watched: true },
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      '/client/app/': '/base/client/app/'
    },

    exclude: [],
    preprocessors: {
      'client/**/!(*spec).js': ['coverage']
    },
    reporters: ['mocha'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};
