'use strict';

import { src, dest, watch as gulpWatch, task, series } from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';

const sassCompiler = gulpSass(sass);

function buildStyles() {
  return src('./src/sass/**/*.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(dest('./dist/css'));
}

function watchFiles() {
  gulpWatch('./src/sass/**/*.scss', buildStyles);
}

task('buildStyles', buildStyles);
task('watch', watchFiles);
task('default', series(buildStyles, watchFiles));
