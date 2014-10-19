var gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  browserify = require('browserify'),
  connect = require('gulp-connect-multi')(),
  $ = require('gulp-load-plugins')();


gulp.task('default',
  connect.server({
    root: [__dirname],
    port: 9001,
    livereload: true,
    open:{
      browser:  'Google Chrome' //'chrome'
    }
}));
