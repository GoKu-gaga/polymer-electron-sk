/**
 * gulp任务：
 * - 语法检查
 */
 const gulp = require('gulp');
 const eslint = require('gulp-eslint');
 const eslintrc = require('./.eslintrc.json');
 
 /**
  * 语法检查
  */
 gulp.task('lint', function() {
   return gulp.src([
     './index.html',
     './src/**/*.html',
     './**/*.js'
   ])
   .pipe(eslint(eslintrc))
   .pipe(eslint.format());
 });