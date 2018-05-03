'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')
var removeEmptyLines = require('gulp-remove-empty-lines')

gulp.task('compress', () => {
	return gulp.src('./src/style.scss')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sass({
        	outputStyle: 'compressed'
        }).on('error', sass.logError))
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
		.pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
		.pipe(sass({
        	outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(sourcemaps.write('.'))
		.pipe(removeEmptyLines())
		.pipe(gulp.dest('./dist'))
});


gulp.task('default', () => {
	gulp.watch('src/**/*.scss', ['normal', 'compress']);
})
