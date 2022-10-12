import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import gulp from 'gulp';
import postCSS from 'gulp-postcss';
import purgeCSS from 'gulp-purgecss';
import gulpSass from 'gulp-sass';
import combineMediaQuery from 'postcss-combine-media-query';
import dartSass from 'sass';

const cssSources = ['assets/css/styles.scss'];
const htmlSources = ['site/snippets/**/*.php', 'site/templates/**/*.php'];

function compile() {
  return gulp
    .src(cssSources)
    .pipe(gulpSass(dartSass)({ includePaths: 'node_modules' }));
}

function optimize() {
  return purgeCSS({ content: htmlSources }).pipe(
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
    [...cssSources, ...htmlSources],
    { delay: 500, ignoreInitial: false },
    devBuild
  );
}

export function build() {
  return compile().pipe(optimize()).pipe(write());
}
