var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function(callback) {
  runSequence('build', ['browser-sync', 'watch'], callback);
});
