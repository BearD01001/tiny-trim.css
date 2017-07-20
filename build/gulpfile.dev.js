var path       = require('path')
var gulp       = require('gulp')
var sass       = require('gulp-sass')
var clean      = require('gulp-clean-css')
var rename     = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')

var distPath   = path.resolve(__dirname, '../dist')

gulp.task('run', () => {
    gulp.src(path.resolve('../src/tiny-trim.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(clean({ format: 'beautify' }))
    .pipe(gulp.dest(distPath))
    .pipe(rename('tiny-trim.min.css'))
    .pipe(clean({
      format: {
        breaks: {
          afterComment: true
        }
      }
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(distPath))
})

gulp.task('default', () => {
  gulp.watch(path.resolve('../src/*.scss'), ['run'])
})
