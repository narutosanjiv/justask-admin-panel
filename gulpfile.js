var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');
var clean = require('gulp-clean');

gulp.task('clean-js', function(){
  gulp.src('app/assets/javascripts').
  pipe(clean());

})
gulp.task('clean-css', function(){
  gulp.src('app/assets/stylesheets').
  pipe(clean());
})

gulp.task('clean-app', ['clean-js', 'clean-css'], function(){
  gulp.src('app/index.html')
  .pipe(clean());
})
gulp.task('build:css', function(){
  gulp.src('src/css/*.less')
  .pipe(less())
  .pipe(concat('application.css'))
  .pipe(gulp.dest('./app/assets/stylesheets'))
  console.log('running a build css');
});

gulp.task('build:js', function(){
  gulp.src("src/js/*.js")
  .pipe(browserify({
			transform: ['babelify', 'reactify']
	}))
  .pipe(concat('application.js'))
  .pipe(gulp.dest('./app/assets/javascripts'))
});

gulp.task('build:app', ['build:css', 'build:js'], function(){
  gulp.src("src/index.html").
  pipe(gulp.dest("./app/"));
});

gulp.task('default', ['build:app'], function(){
  connect.server({
    root: 'app',
    port: 8001,
    livereload: true
  });
});
