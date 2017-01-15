'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var KarmaServer = require('karma').Server;
// var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var changed = require('gulp-changed');
var changedInPlace = require('gulp-changed-in-place');
var logger = require('gulp-print');

// Main Task

gulp.task('default', function() {
  gulp.watch([
    'lib/**/*.js',
    '!lib/script/**',
    'test/**/*Test.js'
  ], [
    'mocha'
  ]);

  gulp.watch([
    'app/**/*.js',
    'spec/**/*Spec.js'
  ], [
    'karma'
  ]);
});


// Testing

gulp.task('mocha', function() {
  return gulp.src(['test/**/*Test.js'], {
      read: false
    })
    .pipe(mocha({
      reporter: 'list'
    }))
    .on('error', gutil.log);
});

gulp.task('karma', function(done) {
  new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


// gulp.task('lint', function() {
//    return gulp.src([
//       'server.js',
//       'public/**/*.js',
//       'controllers/**/*.js',
//       'services/**/*.js',
//       'spec/**/*.js',
//       'test/**/*.js',
//       'lib/*.js'
//    ]).pipe(jshint({
//       lookup: true
//    }))
//    .pipe(jshint.reporter('default'));
// });


// gulp.task('test',['jshint', 'mocha', 'karma']);


// Building


gulp.task('sass', function() {
  return gulp.src('public/**/*.scss')
    // .pipe(changedInPlace('.'))
    .pipe(logger())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'))
    /* Gulp takes everything that's a wildcard
     * or a globstar into its virtual file name. */
});

var tsProject = ts.createProject('tsconfig.json');
gulp.task('tsc', function() {
  return tsProject.src()
    .pipe(changedInPlace('.'))
    .pipe(logger())
    .pipe(tsProject())
    .pipe(gulp.dest('.'));
});


// Serving

gulp.task('serve', ['sass', 'tsc'], function() {
  return nodemon({
    script: 'server.js',
    ext: 'html js css',
    ignore: [
      'lib/gmat/*',
      'lib/gmat-dist/*'
    ],
    tasks: ['sass', 'tsc']
  });
});
