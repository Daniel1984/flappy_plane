var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    hbsfy = require('hbsfy'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    cordova = require('cordova'),
    sequence = require('run-sequence'),
    less = require('gulp-less'),
    zip = require('gulp-zip'),
    gutil =  require('gulp-util');

var paths = {
  source: {
    mainJsFile: './app/js/app.js',
    mainCssFile: './app/css/app.less',
    baseJsDir: './app/js/**',
    js: './app/js/**/*.js',
    css: './app/css/**/*.less',
    img: './assets/img/**'
  },
  dest: {
    js: './public/js',
    css: './public/css',
    img: './public/img'
  }
};

var isProduction = gutil.env.type === "production" || false;

gulp.task('js', function() {
  gulp.src(paths.source.mainJsFile)
    .pipe(plumber())
    .pipe(browserify({
      transform: ['hbsfy']
    }))
    .pipe(concat('app.js'))
    .pipe(gulpif(isProduction, uglify())) // only minify if production
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task('css', function() {
  gulp.src(paths.source.mainCssFile)
    .pipe(plumber())
    .pipe(less({
      compress: true
    }))
    .pipe(gulp.dest(paths.dest.css));
});


gulp.task('img', function() {
  gulp.src(paths.source.img)
    .pipe(plumber())
    .pipe(imagemin({
      optimizationLevel: 1,
      progressive: true
    }))
    .pipe(gulp.dest(paths.dest.img));
});

gulp.task('lint', function() {
  gulp.src(paths.source.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('zip', function () {
  gulp.src('public/**/*')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(paths.source.baseJsDir, function() {
    sequence(
      'lint',
      'js'
    )
  });
  gulp.watch(paths.source.css, function() {
    gulp.run('css');
  })
});

gulp.task('build', ['js', 'css', 'img']);
