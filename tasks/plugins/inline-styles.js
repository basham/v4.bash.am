var minimatch = require('minimatch');
var Handlebars = require('handlebars');

function plugin(opts) {
  return function(files, metalsmith, done) {
    var content = Object
      // Get all file names.
      .keys(files)
      // Get stylesheets file names.
      .filter(minimatch.filter('*.css', { matchBase: true }))
      // Curate content.
      .map(function(file) {
        return files[file].contents.toString();
      })
      // Concatenate.
      .join('');
    // Register partial.
    Handlebars.registerPartial('css', content);
    // Finish.
    done();
  }
}

module.exports = plugin;
