var path       = require('path')
var gulp       = require('gulp')
var less       = require('gulp-less')
var clean      = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')

var distPath   = path.resolve(__dirname, '../dist')
gulp.task('default', () => {
console.log(111)
    gulp.watch(path.resolve('../src/tiny-trim.less'))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dist(distPath))
    .pipe(clean())
    .pipe(sourcemaps.write(path.resolve(__dirname, '../maps')))
    .pipe(gulp.dist(distPath))
})