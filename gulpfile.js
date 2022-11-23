import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import babel from 'gulp-babel';
import postCSS from 'gulp-postcss';
import purgeCSS from 'gulp-purgecss';
import gulpSass from 'gulp-sass';
import terser from 'gulp-terser';
import dartSass from 'sass';

function compileCss() {
  return gulp
    .src(['assets/css/templates/*.scss'])
    .pipe(gulpSass(dartSass)({ includePaths: 'node_modules' }));
}
function purgeCss() {
  return purgeCSS({
    content: ['site/**/*.php', 'site/**/*.yml']
  });
}
function optimizeCss() {
  return postCSS([
    autoprefixer,
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }]
    })
  ])
}

function compileJs() {
  return gulp.src(['assets/js/src/*.js']).pipe(
    babel({
      presets: ['@babel/env']
    })
  );
}
function optimizeJs() {
  return terser();
}

function write(type) {
  return gulp.dest(`assets/${type}/templates/`);
}

function devBuildCss() {
  return compileCss().pipe(write('css'));
}
function watchCss() {
  return gulp.watch(
    ['assets/css/templates/*.scss'],
    { delay: 500, ignoreInitial: false },
    devBuildCss
  );
}
function devBuildJs() {
  return compileJs().pipe(write('js'));
}
function watchJs() {
  return gulp.watch(
    ['assets/js/src/*.js'],
    { delay: 500, ignoreInitial: false },
    devBuildJs
  );
}
export const dev = gulp.parallel(watchCss, watchJs);

function buildCss() {
  return compileCss().pipe(purgeCss()).pipe(optimizeCss()).pipe(write('css'));
}
function buildJs() {
  return compileJs().pipe(optimizeJs()).pipe(write('js'));
}
export const build = gulp.parallel(buildCss, buildJs);