import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import postCSS from 'gulp-postcss';
import purgeCSS from 'gulp-purgecss';
import gulpSass from 'gulp-sass';
import combineMediaQuery from 'postcss-combine-media-query';
import dartSass from 'sass';

function compile() {
  return gulp
    .src(['assets/css/styles.scss'])
    .pipe(gulpSass(dartSass)({ includePaths: 'node_modules' }));
}

function optimize() {
  return purgeCSS({
    content: ['site/snippets/**/*.php', 'site/templates/**/*.php']
  }).pipe(
    postCSS([
      combineMediaQuery,
      autoprefixer,
      cssnano({
        preset: ['default', { discardComments: { removeAll: true } }],
      }),
    ])
  );
}

function write() {
  return gulp.dest('assets/css');
}

function devBuild() {
  return compile().pipe(write());
}

export function dev() {
  return gulp.watch(
    ['assets/css/**/*.scss'],
    { delay: 500, ignoreInitial: false },
    devBuild
  );
}

export function build() {
  return compile().pipe(optimize()).pipe(write());
}
