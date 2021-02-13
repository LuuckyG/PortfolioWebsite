'use strict';

// dependencies
const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
var sass = require('gulp-sass');


// Paths
var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';
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
      .pipe(gulp.dest(SCSS_DEST))
      .pipe(gulp.dest(SCSS_PUBLIC_DEST))
  );
}

gulp.task("minify-css", minifyCSS);

gulp.task("watch", () => {
  gulp.watch(SCSS_SRC, minifyCSS);
});

gulp.task('default', gulp.series('minify-css', 'watch'));




// var JS_SRC = './src/PersonalWebsite/**/*.jsx';
// var JS_DEST = './src/PersonalWebsite/assets/js';
// var HTML_SRC = './src/PersonalWebsite/**/*.html';
// var HTML_DEST = './src/PersonalWebsite/assets/html';


// // Set the browser that you want to support
// const AUTOPREFIXER_BROWSERS = [
//   'ie >= 10',
//   'ie_mob >= 10',
//   'ff >= 30',
//   'chrome >= 34',
//   'safari >= 7',
//   'opera >= 23',
//   'ios >= 7',
//   'android >= 4.4',
//   'bb >= 10'
// ];

// // Gulp task to minify CSS files
// gulp.task('styles', function () {
//   return gulp.src(SCSS_SRC)
//     // Compile SASS files
//     .pipe(sass({
//       outputStyle: 'nested',
//       precision: 10,
//       includePaths: ['.'],
//       onError: console.error.bind(console, 'Sass error:')
//     }))
//     // Auto-prefix css styles for cross browser compatibility
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     // Minify the file
//     .pipe(csso())
//     // Output
//     .pipe(gulp.dest(SCSS_DEST))
// });

// // Gulp task to minify JavaScript files
// gulp.task('scripts', function() {
//   return gulp.src(JS_SRC)
//     // Minify the file
//     .pipe(uglify())
//     // Output
//     .pipe(gulp.dest(JS_DEST))
// });

// // Gulp task to minify HTML files
// gulp.task('pages', function() {
//   return gulp.src([HTML_SRC])
//     .pipe(htmlmin({
//       collapseWhitespace: true,
//       removeComments: true
//     }))
//     .pipe(gulp.dest(HTML_DEST));
// });