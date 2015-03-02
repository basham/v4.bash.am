var gulp = require('gulp');
var Metalsmith = require('metalsmith');

var collections = require('metalsmith-collections');
var ignore = require('metalsmith-ignore');
var permalinks = require('metalsmith-permalinks');

// Content
var fileMetadata = require('metalsmith-filemetadata');
var metadata = require('metalsmith-metadata');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');

// CSS
var less = require('metalsmith-less');
var fingerprint = require('metalsmith-fingerprint');
var autoprefixer = require('metalsmith-autoprefixer');

var Handlebars = require('handlebars');
var moment = require('moment');

Handlebars.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM D, YYYY');
});

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
    .use(fileMetadata([
      {
        pattern: '**/*.md',
        metadata: {
          template: 'default.html'
        },
        preserve: true
      }
    ]))
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
    .use(markdown({
      smartypants: true
    }))
    .use(permalinks({
      relative: false
    }))
    .use(templates({
      engine: 'handlebars',
      inPlace: false
    }))
    // Have to run templates a second time,
    // in order to render Handlbars within markdown.
    .use(templates({
      engine: 'handlebars',
      inPlace: true
    }))
    .build(function(err, files) {
      if (err) {
        return callback(err);
      }
      callback();
    });
});
