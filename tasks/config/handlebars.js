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
