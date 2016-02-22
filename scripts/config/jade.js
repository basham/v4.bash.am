var jade = require('jade');
var uglify = require('uglify-js');

jade.filters.js = function(content, options) {
  return uglify.minify(options.filename).code;
};
