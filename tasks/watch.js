var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', function() {
  gulp.watch(['src/**/*', 'templates/**/*'], ['build', browserSync.reload]);
});
