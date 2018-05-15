let gulp = require('gulp')
let pug = require('gulp-pug')
let stylus = require('gulp-stylus')
let nib = require('nib')
let sourcemaps = require('gulp-sourcemaps')
let coffee = require('gulp-coffee')
let watch = require('gulp-watch')

handle = (error) => {
	console.log(error.toString())
}

gulp.task('css', () => {
    gulp.src('./dev/stylus/style.styl')
	.pipe(sourcemaps.init())
	.pipe(stylus({
		compress: true,
		use: nib()
	}))
	.on('error', handle)
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./assets/css/'))
});


gulp.task('html', () => {
	gulp.src('./dev/pug/*.pug')
		.pipe(pug({
			pretty: false
		}))
		.on('error', handle)
		.pipe(gulp.dest('.'))

	gulp.src('./dev/pug/views/templates/*.pug')
		.pipe(pug({
			pretty: true
		}))
		.on('error', handle)
		.pipe(gulp.dest('./assets/templates'))

})

gulp.task('js', () => {
	gulp.src('./dev/coffee/*.coffee')
		.pipe(sourcemaps.init())
		.pipe(coffee())
		.on('error', handle)
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./assets/js'))
})

gulp.task('default', () => {
	// gulp.watch('./dev/pug/**/*', ['html'])
	// gulp.watch('./dev/stylus/**/*', ['css'])
	// gulp.watch('./dev/coffee/**/*', ['js'])
	watch('./dev/pug/**/*.pug', function(event) {
		console.log("watch triggered")
		console.log(event)
		gulp.start('html')
	})

	watch('./dev/stylus/**/*.styl', function(event) {
		console.log("watch triggered")
		console.log(event)
		gulp.start('css')
	})

	watch('./dev/coffee/**/*.coffee', function(event) {
		console.log("watch triggered")
		console.log(event)
		gulp.start('js')
	})
})
