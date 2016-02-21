var minimatch = require('minimatch');
var cheerio = require('cheerio');
var postcss = require('postcss');
var mqpacker = require('css-mqpacker');

function plugin(opts) {
  return function(files, metalsmith, done) {
    // Get all file names.
    var css = Object.keys(files)
      // Get stylesheets file names.
      .filter(minimatch.filter('*.css', { matchBase: true }))
      // Curate content.
      .map(function(file) {
        return files[file].contents.toString();
      })
      // Concatenate.
      .join('');

    // Get all file names.
    Object.keys(files)
      // Get stylesheets file names.
      .filter(minimatch.filter('*.html', { matchBase: true }))
      // Curate content.
      .forEach(function(file) {
        // Get file data.
        var data = files[file];
        // Get file HTML.
        var html = data.contents.toString();
        // Prepare HTML for analysis.
        var $ = cheerio.load(html);

        // Processor for removing unused styles.
        function unstyle(css) {
          css.walkRules(function(rule) {
            var matches = rule.selectors.filter(function(selector) {
              // Convert pseudo element selectors to their bases.
              // `a:hover` => `a`
              // `.Component::before` => `.Component`
              // `.Component:nth-last-child(2)` => `.Component`
              selector = selector.replace(/(:+[\-\w()]+)+/g, '');
              // Retain `.wf-*` classes, for the Web Font loading technique.
              var matchesWebFont = selector.match(/(\.wf-[\w\-]+)+/g);
              if(!!matchesWebFont) {
                return true;
              }
              // Retain any classes with `fontsLoaded` in the name.
              var matchesFontsLoaded = selector.match(/(\..*fontsLoaded)+/ig);
              if(!!matchesFontsLoaded) {
                return true;
              }
              // Has matches.
              return !!$(selector).length;
            });
            // Remove rule if the selector has no matches in the HTML.
            if(!matches.length) {
              rule.remove();
            }
          });
        }

        // Processor for removing unused atRules.
        function unAtRule(css) {
          css.walkAtRules(function(atRule) {
            if(!atRule.nodes.length) {
              atRule.remove();
            }
          });
        }

        var output = postcss()
          // Remove unused styles.
          .use(unstyle)
          // Remove unused atRules.
          .use(unAtRule)
          // Repackage atRules.
          .use(mqpacker.postcss)
          .process(css);

        // Append CSS to <head>.
        $('head').append('<style>' + output + '</style>');
        // Save updated HTML.
        data.contents = new Buffer($.html(), 'utf8');
      });

    done();
  }
}

module.exports = plugin;
