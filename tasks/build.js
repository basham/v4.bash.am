var gulp = require('gulp');
var Metalsmith = require('metalsmith');

var ignore = require('metalsmith-ignore');
var permalinks = require('metalsmith-permalinks');

// Content
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');

// CSS
var less = require('metalsmith-less');
var fingerprint = require('metalsmith-fingerprint');
var autoprefixer = require('metalsmith-autoprefixer');

gulp.task('build', function(callback) {
  Metalsmith('./')
    // CSS
    .use(less({
      pattern: '**/main.less'
    }))
    .use(autoprefixer())
    .use(fingerprint({
      pattern: '**/*.css'
    }))
    .use(ignore([
      '**/*.less',
      '**/main.css',
      '**/.DS_Store'
    ]))
    // Content
    .use(markdown())
    .use(templates('handlebars'))
    .use(permalinks({
      pattern: ':title',
      relative: false
    }))
    .build(function(err, files) {
      if (err) {
        return callback(err);
      }
      callback();
    });
});
