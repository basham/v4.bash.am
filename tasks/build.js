var gulp = require('gulp');
var Metalsmith = require('metalsmith');

var collections = require('metalsmith-collections');
var ignore = require('metalsmith-ignore');
var permalinks = require('metalsmith-permalinks');
var publish = require('metalsmith-publish');

// Content
var fileMetadata = require('metalsmith-filemetadata');
var metadata = require('metalsmith-metadata');
var markdown = require('metalsmith-markdown');
var jadeMarkup = require('./plugins/jade-markup');
var templates = require('metalsmith-templates');
var htmlMinifier = require('metalsmith-html-minifier');

// CSS
var less = require('metalsmith-less');
var autoprefixer = require('metalsmith-autoprefixer');
var inlineStyles = require('./plugins/inline-styles');

// Configs
require('./config/jade');
var renderer = require('./config/marked');

var templateFunctions = require('./config/functions');
var extend = require('extend');
var _fileMetadata = extend({}, templateFunctions, {
  template: 'default.jade'
});

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
        pattern: '**/*.md',
        metadata: _fileMetadata,
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
    .use(markdown({
      pedantic: true,
      renderer: renderer,
      smartypants: true
    }))
    .use(permalinks({
      relative: false
    }))
    .use(jadeMarkup())
    .use(templates('jade'))
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
