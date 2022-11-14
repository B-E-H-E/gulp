const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
//const image = require('gulp-image');

function tasksCSS(){
    
    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'])
    .pipe(concat('libs.css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
}

function tasksJS(){
    
    return gulp.src([
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        './node_modules/@fortawesome/fontawesome-free/js/all.js',
        './node_modules/jquery/dist/jquery.js'])
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'))
}

/*function tasksImages(){

    return gulp.src('./src/images/*')
    .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
    }))
    .pipe(gulp.dest('./dist/images'))
}
exports.images = tasksImages;
*/

exports.styles = tasksCSS;
exports.scripts = tasksJS;
