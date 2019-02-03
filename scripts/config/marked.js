var marked = require('marked');
var highlight = require('highlight.js');
var classNames = require('classnames');

highlight.configure({
  classPrefix: 'Code-part Code-part--'
});

var renderer = new marked.Renderer();

renderer.blockquote = function(quote) {
  return quote.replace(
    /(.*)(\n= )(.*)(<\/p>)/g,
    `<blockquote class="Article-blockquote">
      $1$4
      <footer class="Article-blockquoteFooter">
        <cite class="Article-blockquoteCite">$3</cite>
      </footer>
    </blockquote>`
  )
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
    var name = `Code--${escape(lang, true)}`;
    cn[name] = true;
  }

  var cn = classNames(cn);

  return `<figure class="Figure Figure--code">
    <pre class="Figure-content"><code class="${cn}">${escaped ? code : escape(code, true)}</code></pre>
  </figure>`;
};

renderer.codespan = function(text) {
  return `<code class="Code Code--inline">${text}</code>`;
};

renderer.heading = function(text, level, raw) {
  var type = `h${level}`;
  var id = this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-');
  var idAttr = level === 2 ? ` id="${id}"` : '';
  var cn = `Article-${type}`;
  return `<${type} class="${cn}"${idAttr}>${text}</${type}>`;
};

renderer.hr = function() {
  return '<hr class="Article-hr"/>';
};

renderer.link = function(href, title, text) {
  if(this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch(e) {
      return '';
    }
    if(prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  return `<a class="Link" href="${href}"${title ? ` title="${title}"` : ''}>${text}</a>`;
};

renderer.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return `<${type} class="Article-list">${body}</${type}>`;
};

renderer.listitem = function(text) {
  return `<li class="Article-listItem">${text}</li>`;
};

renderer.paragraph = function(text) {
  // Replace the last space outside of a tag with a non-breaking space.
  var t = text.trim()
  var re = /\s(?![^<>]*>)/g
  var count = t.match(re).length
  var i = 0;
  var newText = t.replace(re, function (match) {
    i++;
    return i === count ? '&nbsp;' : match
  })
  return `<p class="Article-paragraph">${newText}</p>`;
};

renderer.table = function(header, body) {
  return `<figure class="Figure">
    <div class="Figure-content Figure-content--scroll">
      <table class="Article-table">
        <thead>
          ${header}
        </thead>
        <tbody>
          ${body}
        </tbody>
      </table>
    </div>
  </figure>`;
};

renderer.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var cn = classNames({
    'Article-tableCell': true,
    'Article-tableCell--header': flags.header,
    'Article-tableCell--center': flags.align === 'center',
    'Article-tableCell--right': flags.align === 'right'
  });
  return `<${type} class="${cn}">${content}</${type}>`;
};

module.exports = {
  renderer: renderer,
  smartypants: true
};
