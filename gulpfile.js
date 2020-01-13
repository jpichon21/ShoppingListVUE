var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('sass/styles.scss')
    .pipe(sass()) // on appelle gulp-sass
    //la destination est la racine
    .pipe(gulp.dest('./'))
});