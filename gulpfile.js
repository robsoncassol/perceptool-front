var gulp   = require('gulp'),
	shell = require('gulp-shell'),
	clean = require('gulp-clean'),
	fs = require('fs');

	filesToMove = [
        './build/**'
    ];

gulp.task('build', shell.task('npm run build'));

gulp.task('move', ['build'], function() {
  return gulp.src(filesToMove, { base: './' })
  .pipe(gulp.dest('../src/main/resources'));
});

gulp.task('clean', ['move'], function() {
  return gulp.src('../src/main/resources/public')
  .pipe(clean({force: true}));
});


gulp.task('rename', ['clean'], function() {
	fs.rename('../src/main/resources/build', '../src/main/resources/public', function (err) {
		if (err) {
			throw err;
		}
	});
});

gulp.task('buildAll', ['rename']);

gulp.task('watch', function() {
	gulp.watch(['./src/**', './public/**'], ['buildAll']);
});
