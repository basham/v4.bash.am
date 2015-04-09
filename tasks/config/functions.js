var moment = require('moment');

exports.contains = function(array, item) {
  return array.indexOf(item) >= 0;
};

exports.dateFormat = function(date) {
  return moment(date).format('MMMM D, YYYY');
};
