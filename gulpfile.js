'use strict';

var browserSync = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('browser-sync', function() {
	return browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch(['./js/*.js'], browserSync.reload);
});
