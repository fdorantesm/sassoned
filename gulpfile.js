'use strict'

var gulp = require('gulp')
var stylus = require('gulp-stylus')
var nib = require('nib')
var rename = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')

gulp.task('compress', () => {
	return gulp.src('./src/bootstrap.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({
			compress: true,
			use: nib()
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(rename('bootstrap.min.css'))
		.pipe(gulp.dest('./dist'))
});

gulp.task('normal', () => {
	return gulp.src('./src/bootstrap.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({use: nib()}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'))
});


gulp.task('default', () => {
	gulp.watch('src/**/*.styl', ['normal', 'compress']);
})
