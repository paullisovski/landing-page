var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    browserSync  = require('browser-sync');

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

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/styles/sass/**/*.sass', ['sass']);
    gulp.watch('index.html', browserSync.reload);
});
