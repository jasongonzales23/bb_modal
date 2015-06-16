'use strict';

var
  gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  minifyCSS = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require("gulp-rename");

var config = {
  files: './stylesheets/main.css'
};

gulp.task('sass', function() {
  gulp.src('./src/main.scss')
    .pipe(sass(
      {
        style: 'expanded',
        sourceComments: true
      }
    ))
    .pipe(gulp.dest('./stylesheets/'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: "./"
  });
});

gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch('./src/**/*.scss', ['sass']);
});



