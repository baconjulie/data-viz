import fs from 'fs'
import gulp from 'gulp'
import cleancss from 'gulp-clean-css'
import uglify from 'gulp-uglify'
import header from 'gulp-header'

const BANNER = fs.readFileSync('banner.txt', 'utf8').replace('@date', (new Date()))


gulp.task('minify:css', () =>
  gulp.src('./dataviz/static/**/*.css')
    .pipe(cleancss())
    .pipe(header(BANNER))
    .pipe(gulp.dest('./dataviz/static/')))

gulp.task('minify:js', () =>
  gulp.src('./dataviz/static/**/*.js')
    .pipe(uglify({
      preserveComments: 'license',
      compressor: {
        screw_ie8: true,
      },
      output: {
        preamble: BANNER,
      },
    }))
    .pipe(gulp.dest('./dataviz/static/')))
