var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var exit = require('gulp-exit');

var options = {
  cacheDir: 'build-cache'
};

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(deploy(options))
    .pipe(exit());
});
