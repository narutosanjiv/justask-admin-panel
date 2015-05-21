var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
gulp.task('build:css', function(){
  gulp.src('src/css/*.less')
  .pipe(less())
  .pipe(concat('application.css'))
  .pipe(gulp.dest('./app/assets/stylesheets'))
  console.log('running a build css');
});

gulp.task('build:js', function(){
  gulp.src("src/js/*.js")
});

gulp.task('default', function(){
  console.log('running default task');
});
