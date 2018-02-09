var gulp      =    require('gulp');
var sass      =    require('gulp-sass');
var bulkSass  =    require('gulp-sass-glob-import');
var bs        =    require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
  bs.init({
    proxy: {
      target: "http://oscuro.lndo.site",
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('main.scss')
    .pipe(bulkSass())
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('sass/**/*.scss', ['sass']);
  gulp.watch('**/*.twig').on('change', bs.reload);
});
