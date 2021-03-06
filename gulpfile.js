const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');                              // сборщик множества файлов одного типа в один файл
const del = require('del');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', () => {
  return gulp.src('./src/sass/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('Error', sass.logError))                              // pipe - действие над файлами
      .pipe(concat('main.css'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./assets/css/'))						// destination
      .pipe(browserSync.stream());                                        
});

gulp.task('scripts_index', () => {
  return gulp.src('./src/js/**/index.js')
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./assets/js/'))
    .pipe(browserSync.stream());
});

gulp.task('scripts_data', () => {
  return gulp.src('./src/js/**/data.js')
      .pipe(concat('data.js'))
      .pipe(gulp.dest('./assets/js/'))
      .pipe(browserSync.stream());
});

gulp.task('scripts_page', () => {
  return gulp.src('./src/js/**/page.js')
      .pipe(concat('page.js'))
      .pipe(gulp.dest('./assets/js/'))
      .pipe(browserSync.stream());
});

gulp.task('fonts', () => {
  return gulp.src('./src/font/**')
      .pipe(gulp.dest('./assets/font/'))
      .pipe(browserSync.stream());
});

gulp.task('del', () => {
  return del(['./assets/*']);
});

gulp.task('img-compress', () => {
  return gulp.src('./src/img/**')
      .pipe(imagemin({
        progressive: true
      }))
      .pipe(gulp.dest('./assets/img/'))
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: "./"                                                       // расположение html файлов проекта
    }
  });

  gulp.watch('./src/img/**', gulp.series('img-compress'));
  gulp.watch('./src/sass/**/*.scss', gulp.series('styles'));        // в каких файлах будут отслеживаться изменения
  gulp.watch('./src/js/**/*.js', gulp.series('scripts_index'));
  gulp.watch('./src/js/**/*.js', gulp.series('scripts_data'));
  gulp.watch('./src/js/**/*.js', gulp.series('scripts_page'));
  gulp.watch('./src/font/**', gulp.series('fonts'));
  gulp.watch('./*.html').on('change', browserSync.reload);

});

gulp.task('default', gulp.series('del', 
  gulp.parallel('styles', 'scripts_index', 'scripts_data', 'scripts_page', 'img-compress', 'fonts'), 
'watch'));
