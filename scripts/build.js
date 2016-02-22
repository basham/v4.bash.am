var Metalsmith = require('metalsmith');

// Metalsmith plugins
var autoprefixer = require('metalsmith-autoprefixer');
var collections = require('metalsmith-collections');
var fileMetadata = require('metalsmith-filemetadata');
var htmlMinifier = require('metalsmith-html-minifier');
var ignore = require('metalsmith-ignore');
var inplace = require('metalsmith-in-place');
var layouts = require('metalsmith-layouts');
var less = require('metalsmith-less');
var markdown = require('metalsmith-markdown');
var metadata = require('metalsmith-metadata');
var permalinks = require('metalsmith-permalinks');
var publish = require('metalsmith-publish');
var watch = require('metalsmith-watch')

// Custom plugins
var jadeMarkup = require('./plugins/jade-markup');
var inlineStyles = require('./plugins/inline-styles');

// Configs
require('./config/jade');
var renderer = require('./config/marked');
var templateFunctions = require('./config/functions');

Metalsmith('./')
  .use(watch({
    paths: {
      '${source}/**/*': '**/*',
      'layouts/**/*': '**/*'
    }
  }))
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
    },
    talks: {
      pattern: 'talks/*.md',
      sortBy: 'date',
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
    if(err) {
      console.error(err);
    }
  });
