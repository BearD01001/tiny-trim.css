var path       = require('path')
var gulp       = require('gulp')
var less       = require('gulp-less')
var clean      = require('gulp-clean-css')
var rename     = require('gulp-rename')
var sourcemaps = require('gulp-sourcemaps')

var destPath   = path.resolve(__dirname, '../dest')

gulp.task('run', () => {
    gulp.src(path.resolve('../src/tiny-trim.less'))
    .pipe(sourcemaps.init())
    .pipe(less())
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
    .pipe(sourcemaps.write(path.resolve(__dirname, '../maps')))
    .pipe(gulp.dest(destPath))
})

gulp.task('default', () => {
  gulp.watch(path.resolve('../src/*.less'), ['run'])
})
