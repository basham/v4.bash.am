var minimatch = require('minimatch');
var cheerio = require('cheerio');
var extend = require('extend');
var jade = require('jade');

function plugin(opts) {
  return function(files, metalsmith, done) {
    // Get global metadata.
    var metadata = metalsmith.metadata();
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
        var $ = cheerio.load(html, {
          decodeEntities: false
        });
        // Find all <jade> nodes.
        $('jade').each(function(i, el) {
          // Get the content.
          var source = $(this).html();
          // Merge global metadata with local file data.
          var options = extend({}, opts, metadata, data);
          // Render the content as Jade.
          var html = jade.render(source, options);
          // Replace the <jade> node with the new rendered content.
          $(this).replaceWith(html);
        });
        // Save updated HTML.
        data.contents = new Buffer($.html(), 'utf8');
      });

    done();
  }
}

module.exports = plugin;
