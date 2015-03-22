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
var templates = require('metalsmith-templates');
var htmlMinifier = require('metalsmith-html-minifier');

// CSS
var less = require('metalsmith-less');
var autoprefixer = require('metalsmith-autoprefixer');
var inlineStyles = require('./plugins/inline-styles');

// Configs
require('./config/handlebars');
var renderer = require('./config/marked');

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
      renderer: renderer,
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
