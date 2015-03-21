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

// CSS
var less = require('metalsmith-less');
var fingerprint = require('metalsmith-fingerprint');
var autoprefixer = require('metalsmith-autoprefixer');

//
// Handlebars
//
var Handlebars = require('handlebars');
var moment = require('moment');

Handlebars.registerHelper('formatDate', function(date) {
  return moment(date).format('MMMM D, YYYY');
});

Handlebars.registerHelper('ifIsInCollection', function(name, options) {
  var collections = options.data.root.collection;
  var contains = collections.indexOf(name) >= 0;
  if(contains) {
    return options.fn(this);
  }
  else {
    return options.inverse(this);
  }
});

Handlebars.registerHelper('log', function(content) {
  console.log(content);
});

//
// Markdown renderer
//
var marked = require('marked');
var renderer = new marked.Renderer();
var classNames = require('classnames');
var highlight = require('highlight.js');
highlight.configure({
  classPrefix: 'Code-part Code-part--'
});

renderer.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  var cn = {
    'Code': true
  };
  if(!!lang) {
    var name = 'Code--' + escape(lang, true);
    cn[name] = true;
  }
  var cn = classNames(cn);

  return '<pre class="Article-codeFigure"><code class="' + cn + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

renderer.codespan = function(text) {
  return '<code class="Code Code--inline">' + text + '</code>';
};

renderer.heading = function(text, level, raw) {
  var type = 'h' + level;
  var id = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
  var idAttr = level === 2 ? ' id="' + id + '"' : '';
  var cn = 'Article-' + type;
  return '<' + type + ' class="' + cn + '"' + idAttr + '>'
    + text
    + '</' + type + '>\n';
};

renderer.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + ' class="Article-list">\n' + body + '</' + type + '>\n';
};

renderer.listitem = function(text) {
  return '<li class="Article-listItem">' + text + '</li>\n';
};

renderer.paragraph = function(text) {
  return '<p class="Article-paragraph">' + text + '</p>\n';
};

renderer.table = function(header, body) {
  return '<div class="Article-tableFigure">\n'
  + '<table class="Article-table">\n'
  + '<thead>\n'
  + header
  + '</thead>\n'
  + '<tbody>\n'
  + body
  + '</tbody>\n'
  + '</table>\n'
  + '</div>\n';
};

renderer.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var cn = classNames({
    'Article-tableCell': true,
    'Article-tableCell--header': flags.header,
    'Article-tableCell--center': flags.align === 'center',
    'Article-tableCell--right': flags.align === 'right'
  });
  return '<' + type + ' class="' + cn + '">' + content + '</' + type + '>\n';
};

//
// Task
//
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
    .use(fingerprint({
      pattern: '**/*.css'
    }))
    .use(ignore([
      '**/*.less',
      '**/main.css',
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
      highlight: function(code) {
        return highlight.highlightAuto(code).value;
      },
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
    .build(function(err, files) {
      if (err) {
        return callback(err);
      }
      callback();
    });
});
