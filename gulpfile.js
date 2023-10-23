const {src, dest, series, watch, parallel} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const cleanCss = require('gulp-clean-css');

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(dest('dist'))
}

function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(cleanCss())
    .pipe(dest('dist/css'))
}


function img() {
  return src(['src/img/**.png', 'src/img/**.jpg'])
    .pipe(dest('dist/img'))
}

function svg() {
  return src(['src/svg/**.svg'])
    .pipe(dest('dist/svg'))
}

function js() {
  return src(['src/js/**.js'])
    .pipe(concat('main.js'))
    .pipe(dest('dist/js'))
}

function cleanDist() {
  return src('dist/')
    .pipe(clean())
}

function watching() {
  watch(['src/scss/*.scss'], scss);
  watch(['src/parts/*.html'], html);
  watch(['src/*.html'], html);
  watch(['src/img'], img);
  watch(['src/svg'], svg);
  watch(['src/js/main.js'], js);
}

exports.clean = cleanDist;
exports.html = html;

exports.build = series(cleanDist, html, scss, img, svg, js);

exports.watching = watching;