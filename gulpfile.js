import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import postCSS from 'gulp-postcss';
import purgeCSS from 'gulp-purgecss';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';

function compile() {
  return gulp
    .src(['assets/css/templates/*.scss'])
    .pipe(gulpSass(dartSass)({ includePaths: 'node_modules' }));
}

function purge() {
  return purgeCSS({
    content: ['site/**/*.php', 'site/**/*.yml']
  });
}

function optimize() {
  return postCSS([
    autoprefixer,
    cssnano({
      preset: ['default', { discardComments: { removeAll: true } }]
    })
  ])
}

function write() {
  return gulp.dest('assets/css/templates/');
}

function devBuild() {
  return compile().pipe(write());
}

export function dev() {
  return gulp.watch(
    ['assets/css/templates/*.scss'],
    { delay: 500, ignoreInitial: false },
    devBuild
  );
}

export function build() {
  return compile().pipe(purge()).pipe(optimize()).pipe(write());
}
