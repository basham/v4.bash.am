var gulp = require('gulp');
var Metalsmith = require('metalsmith');

var collections = require('metalsmith-collections');
var ignore = require('metalsmith-ignore');
var permalinks = require('metalsmith-permalinks');

// Content
var metadata = require('metalsmith-metadata');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');

// CSS
var less = require('metalsmith-less');
var fingerprint = require('metalsmith-fingerprint');
var autoprefixer = require('metalsmith-autoprefixer');

var Handlebars = require('handlebars');
var moment = require('handlebars-helper-moment')();

Handlebars.registerHelper('moment', moment.moment);

Handlebars.registerHelper('log', function(content) {
  console.log(content);
});

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
    .use(metadata({
      site: 'site.yaml'
    }))
    .use(collections({
      pages: {
        pattern: '*.md',
        sortBy: 'order'
      },
      articles: {
        pattern: 'articles/*.md',
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(markdown())
    .use(permalinks({
      relative: false
    }))
    .use(templates('handlebars'))
    .build(function(err, files) {
      if (err) {
        return callback(err);
      }
      callback();
    });
});
