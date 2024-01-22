const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css');
// const del = require('del').deleteSync;
let del;
(async () => {
  del = await import('del');
  console.log('del', del);
})();

gulp.task('sass', async function () {
  // await del(['dist/css']);
  return gulp
    .src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});
