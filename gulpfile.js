"use strict"

var gulp = require('gulp'); 
	// look in module folder and find this item
var jshint = require('gulp-jshint'); 
var watch = require('gulp-watch'); 

gulp.task('default', ['lint', 'watch']); 
	// default will run second argument tasks 

gulp.task('watch', function() { 
	gulp.watch('main.js', ['lint']); 
}); 

gulp.task('lint', function() { 
	return gulp.src('main.js') 
	.pipe(jshint()) 
	.pipe(jshint.reporter('jshint-stylish')); 
});