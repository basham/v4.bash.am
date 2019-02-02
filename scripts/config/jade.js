var jade = require('jade');
var uglify = require('uglify-js');

jade.filters.js = function(content) {
  return uglify.minify(content).code;
};
