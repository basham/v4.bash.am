var gulp = require('gulp');
var Metalsmith = require('metalsmith');

var collections = require('metalsmith-collections');
var ignore = require('metalsmith-ignore');
var permalinks = require('metalsmith-permalinks');
var publish = require('metalsmith-publish');

// Content
var fileMetadata = require('metalsmith-filemetadata');
var metadata = require('metalsmith-metadata');
var inplace = require('metalsmith-in-place');
var markdown = require('metalsmith-markdown');
var jadeMarkup = require('./plugins/jade-markup');
var layouts = require('metalsmith-layouts');
var htmlMinifier = require('metalsmith-html-minifier');

// CSS
var less = require('metalsmith-less');
var autoprefixer = require('metalsmith-autoprefixer');
var inlineStyles = require('./plugins/inline-styles');

// Configs
require('./config/jade');
var renderer = require('./config/marked');

var templateFunctions = require('./config/functions');

gulp.task('build', function(callback) {
  Metalsmith('./')
    // CSS
    .use(less({
      render: {
        compress: true
      },
      pattern: '**/main.less'
    }))
    .use(autoprefixer())
    .use(ignore([
      '**/*.less',
      '**/.DS_Store'
    ]))
    // Content
    .use(publish())
    .use(metadata({
      site: 'site.yaml'
    }))
    .use(fileMetadata([
      {
        metadata: templateFunctions,
        pattern: '**/*.md',
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
      },
      work: {
        pattern: 'work/*.md',
        sortBy: 'endDate',
        reverse: true
      }
    }))
    .use(inplace({
      engine: 'handlebars',
      pattern: '**/*.md'
    }))
    .use(markdown({
      pedantic: true,
      renderer: renderer,
      smartypants: true
    }))
    .use(permalinks({
      relative: false
    }))
    .use(jadeMarkup())
    .use(layouts({
      default: 'default.jade',
      directory: 'layouts',
      engine: 'jade',
      pattern: '**/*.html'
    }))
    .use(inlineStyles())
    .use(ignore([
      '**/main.css'
    ]))
    .use(htmlMinifier())
    .build(function(err, files) {
      if (err) {
        return callback(err);
      }
      callback();
    });
});
