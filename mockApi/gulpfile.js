var gulp = require('gulp');
var mockServer = require('gulp-mock-server');

gulp.task('default', function() {
  gulp.src('.').pipe(
    mockServer({
      port: 8090,
    })
  );
});
