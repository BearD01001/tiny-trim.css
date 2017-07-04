var path       = require('path')
var gulp       = require('gulp')
var sass       = require('gulp-sass')
var clean      = require('gulp-clean-css')
var rename     = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')

var destPath   = path.resolve(__dirname, '../dest')

gulp.task('run', () => {
    gulp.src(path.resolve('../src/tiny-trim.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(clean({ format: 'beautify' }))
    .pipe(gulp.dest(destPath))
    .pipe(rename('tiny-trim.min.css'))
    .pipe(clean({
      format: {
        breaks: {
          afterComment: true
        }
      }
    }))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(destPath))
})

gulp.task('default', () => {
  gulp.watch(path.resolve('../src/*.scss'), ['run'])
})
