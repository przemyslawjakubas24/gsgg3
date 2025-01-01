import gulp from 'gulp'
import * as sass from 'sass'
import gulpSass from 'gulp-sass'
import postcss from 'gulp-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import rename from 'gulp-rename'

const sassCompiler = gulpSass(sass)



const sassTask = () => {
  return gulp
  .src('./src/sass/**/*.scss')
  .pipe(sassCompiler().on('error', sassCompiler.logError))
  .pipe(postcss([autoprefixer(), cssnano()]))
  .pipe(
    rename({
      suffix: '.min',
    })
  )
  .pipe(gulp.dest('./dist/css'))
}


const watchTask = () => {
  gulp.watch('./src/scss/**/*.scss', sassTask)
}

gulp.task('sass', sassTask)
gulp.task('watch', watchTask)

gulp.task('default', gulp.series('sass', 'watch'))

