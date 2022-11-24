import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import cssnano from 'cssnano';
import gulp from 'gulp';
import babel from 'gulp-babel';
import buffer from 'gulp-buffer';
import postCSS from 'gulp-postcss';
import purgeCSS from 'gulp-purgecss';
import gulpSass from 'gulp-sass';
import tap from 'gulp-tap';
import terser from 'gulp-terser';
import dartSass from 'sass';

function compileCss() {
  return gulp
    .src(['assets/css/templates/*.scss'])
    .pipe(gulpSass(dartSass)({ includePaths: 'node_modules' }));
}
function optimizeCss(stream) {
  return stream
    .pipe(
      purgeCSS({
        content: ['site/**/*.php', 'site/**/*.yml']
      })
    )
    .pipe(
      postCSS([
        autoprefixer,
        cssnano({
          preset: ['default', { discardComments: { removeAll: true } }]
        })
      ])
    );
}

function compileJs() {
  return gulp.src(['assets/js/src/*.js'], { read: false }).pipe(
    tap((file) => {
      file.contents = browserify(file.path).bundle();
    })
  );
}
function optimizeJs(stream) {
  return stream
    .pipe(buffer())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(terser());
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
  return optimizeCss(compileCss()).pipe(write('css'));
}
function buildJs() {
  return optimizeJs(compileJs()).pipe(write('js'));
}
export const build = gulp.parallel(buildCss, buildJs);
