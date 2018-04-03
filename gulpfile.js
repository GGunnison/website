var browserify = require('browserify'),
    gulp       = require('gulp'),
 	  watch      = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    browserify = require('browserify'),
    nodemon    = require('gulp-nodemon'),
	  source     = require('vinyl-source-stream');


gulp.task('develop', function () {
  nodemon( {script: './bin/www', ext: 'html js', tasks:['browserify']} )
    .on('start', 'browserify')
    .on('restart', function () {
      console.log('restarting server HERE');
    });
});

gulp.task('browserify', function() {
  
  var entries = ['landingController.js'];

  entries.forEach(function(fileName){
    return browserify('./bin/controllers/' + fileName)
    .bundle()
    .pipe(source(fileName))
    .pipe(gulp.dest('./public/javascripts'));

  });
});



