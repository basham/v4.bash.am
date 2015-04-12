var marked = require('marked');
var highlight = require('highlight.js');
var classNames = require('classnames');

highlight.configure({
  classPrefix: 'Code-part Code-part--'
});

var renderer = new marked.Renderer();

renderer.blockquote = function(quote) {
  var citeRegex = /(<p[^>]*>)(<cite>.*<\/cite>)(<\/p>)/g;
  quote = quote.replace(citeRegex, '<footer class="Article-cite">$2</footer>');
  return '<blockquote class="Article-blockquote">' + quote + '</blockquote>';
}

renderer.code = function(code, lang, escaped) {
  if(highlight) {
    var out = highlight.highlightAuto(code).value;
    if(out != null && out !== code) {
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
    + '</code></pre>';
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
    + '</' + type + '>';
};

renderer.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + ' class="Article-list">' + body + '</' + type + '>';
};

renderer.listitem = function(text) {
  return '<li class="Article-listItem">' + text + '</li>';
};

renderer.paragraph = function(text) {
  return '<p class="Article-paragraph">' + text + '</p>';
};

renderer.table = function(header, body) {
  return '<div class="Article-tableFigure">'
  + '<table class="Article-table">'
  + '<thead>'
  + header
  + '</thead>'
  + '<tbody>'
  + body
  + '</tbody>'
  + '</table>'
  + '</div>';
};

renderer.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var cn = classNames({
    'Article-tableCell': true,
    'Article-tableCell--header': flags.header,
    'Article-tableCell--center': flags.align === 'center',
    'Article-tableCell--right': flags.align === 'right'
  });
  return '<' + type + ' class="' + cn + '">' + content + '</' + type + '>';
};

module.exports = renderer;
