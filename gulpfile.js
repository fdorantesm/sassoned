'use strict'

let gulp = require('gulp')
let sass = require('gulp-sass')
let rename = require('gulp-rename')
let sourcemaps = require('gulp-sourcemaps')
let autoprefixer = require('gulp-autoprefixer')
let removeEmptyLines = require('gulp-remove-empty-lines')

let vendors = { browsers: ['last 5 versions'] }

gulp.task('compress', () => {
	return gulp.src('./src/gosp.scss')
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
	return gulp.src('./src/gosp.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
        	outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(autoprefixer(vendors))
		.pipe(sourcemaps.write('.'))
		.pipe(removeEmptyLines())
		.pipe(gulp.dest('./dist'))
});


gulp.task('default', ['normal', 'compress'], () => {
	gulp.watch('src/**/*.scss', ['normal', 'compress']);
})
