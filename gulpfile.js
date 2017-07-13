var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('default', function() {
    console.log("Hooray!")
});

gulp.task('html', function() {
    console.log("imagine something")
});

gulp.task('styles', function() {
    return gulp.src('./docs/assets/styles/docs.css')
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./docs/temp/styles'));
});

gulp.task('watch', function() {

    watch('./docs/index.html', function() {
        gulp.start('html');
    });

    watch('./docs/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});