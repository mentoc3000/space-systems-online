'use strict';

module.exports = function(config) {

  var clientBase = 'client/';
  var appBase    = 'client/app/';       // transpiled app JS and map files
  var appSrcBase = 'client/app/';       // app source TS files
  var appAssets  = '/home/mentoc3000/sso/client/app/'; // component assets fetched by Angular's compiler

/*
  // Testing helpers (optional) are conventionally in a folder called `testing`
  var testingBase    = 'testing/'; // transpiled test JS and map files
  var testingSrcBase = 'testing/'; // test source TS files
  */

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],

    client: {
      // builtPaths: [appBase, testingBase], // add more spec base paths as needed
      buildPaths: [clientBase],
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

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

      { pattern: clientBase + 'systemjs.config.js', included: false, watched: false },
      { pattern: clientBase + 'systemjs.config.extras.js', included: false, watched: false },
      'karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels
      'bower_components/jquery/dist/jquery.js',

      // transpiled application & spec code paths loaded via module imports
      { pattern: clientBase + '**/*.js', included: false, watched: true },
      // { pattern: testingBase + '**/*.js', included: false, watched: true },
      { pattern: clientBase + '**/*.spec.js', included: false, watched: true },


      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: clientBase + '**/*.html', included: false, watched: true },
      { pattern: clientBase + '**/*.css', included: false, watched: true },

      // Paths for debugging with source maps in dev tools
      { pattern: clientBase + '**/*.ts', included: false, watched: false },
      { pattern: clientBase + '**/*.js.map', included: false, watched: false },
      // { pattern: testingSrcBase + '**/*.ts', included: false, watched: false },
      // { pattern: testingBase + '**/*.js.map', included: false, watched: false}
      { pattern: clientBase + '**/*.spec.ts', included: false, watched: false },
      { pattern: clientBase + '**/*.spec.js.map', included: false, watched: false }
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      '/app/': appAssets
    },

    exclude: [],
    preprocessors: {},
    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};
