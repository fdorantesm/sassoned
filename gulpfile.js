'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var removeEmptyLines = require('gulp-remove-empty-lines')

var vendors = { browsers: ['last 5 versions'] }

gulp.task('compress', () => {
	return gulp.src('./src/style.scss')
		.pipe(sourcemaps.init())
        .pipe(sass({
        	outputStyle: 'compressed'
        }).on('error', sass.logError))
		.pipe(autoprefixer(vendors))
		.pipe(rename('style.min.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(removeEmptyLines({
			removeComments: true
		}))
		.pipe(gulp.dest('./dist'))
});

gulp.task('normal', () => {
	return gulp.src('./src/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
        	outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(autoprefixer(vendors))
		.pipe(sourcemaps.write('.'))
		.pipe(removeEmptyLines())
		.pipe(gulp.dest('./dist'))
});


gulp.task('default', () => {
	gulp.watch('src/**/*.scss', ['normal', 'compress']);
})
