var gulp = require('gulp'),
	nodemon = require('gulp-nodemon')
	gulpMocha = require('gulp-mocha')
	supertest = require('supertest')
	env = require('gulp-env');

gulp.task('default', function() {
	nodemon({
		script: 'app.js',
		ext: 'js',
		env: {
			PORT: 8000
		},
		ignore: ['./node_modules/**']
	})
	.on('restart', function() {
		console.log('Restart');
	});	
})

gulp.task('test', function() {
	env({vars: {ENV:'Test'}});
	gulp.src('tests/*.js', {read: false})
		.pipe(gulpMocha({reporter: 'nyan' }))
})