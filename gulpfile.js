var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    cssmin       = require('gulp-cssmin'),
    rename       = require('gulp-rename'),

gulp.task('sass', function(){
    return gulp.src('src/styles/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('src/styles/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});

gulp.task('css-min', ['sass'], function() {
    return gulp.src('src/styles/css/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('src/styles/css'));
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/styles/sass/**/*.sass', ['sass']);
    gulp.watch('index.html', browserSync.reload);
});
