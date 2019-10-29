const gulp = require('gulp');
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});

gulp.task('witcher', function () {
  gulp.watch('scss/*.scss', gulp.series("sass"));
});