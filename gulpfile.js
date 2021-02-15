'use strict';

// dependencies
const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
var sass = require('gulp-sass');


// Paths
var SCSS_SRC = './src/app/assets/scss/**/*.scss';
var SCSS_DEST = './src/app/assets/css';
var SCSS_PUBLIC_DEST = './public';


function minifyCSS() {
  return (
    gulp
      .src(SCSS_SRC)
      .pipe(sass({
            outputStyle: 'nested',
            precision: 10,
            includePaths: ['.'],
            onError: console.error.bind(console, 'Sass error:')
          }))
      .pipe(cleanCSS())
      .pipe(gulp.dest(SCSS_PUBLIC_DEST))
      .pipe(gulp.dest(SCSS_DEST))
  );
}

gulp.task("minify-css", minifyCSS);

gulp.task("watch", () => {
  gulp.watch(SCSS_SRC, minifyCSS);
});

gulp.task('default', gulp.series('minify-css', 'watch'));
