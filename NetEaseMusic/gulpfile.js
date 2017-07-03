var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var del = require('del');
var gutil = require('gulp-util');
const babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
let cleanCSS = require('gulp-clean-css');

var paths = {
  scripts: './*.js',
  images: './images/**/*',
  css: './*.css',
  staticFiles:'./*{html,json}',
  svg: './svg/*',
  mp3:'./*.mp3'
};

gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.scripts)
      .pipe(babel({
			presets: ['env']
		}))
        .pipe(uglify()
            .on('error', function(err) {
                gutil.log(gutil.colors.red('[Error]'), err.toString());
                this.emit('end');
        }))
    .pipe(gulp.dest('build/'));
});

gulp.task('onlyscripts', function() {
  return gulp.src(paths.scripts)
      .pipe(babel({
			presets: ['env']
		}))
        .pipe(uglify()
            .on('error', function(err) {
                gutil.log(gutil.colors.red('[Error]'), err.toString());
                this.emit('end');
        }))
    .pipe(gulp.dest('build/'));
});

gulp.task('css', ['clean'], function() {
  return gulp.src(paths.css)
      .pipe(postcss([ autoprefixer() ]))
      .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/'));
});

gulp.task('onlycss', function() {
  return gulp.src(paths.css)
      .pipe(postcss([ autoprefixer() ]))
      .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/'));
});


// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/images'));
});



gulp.task('static-files', ['clean'], function() {
  return gulp.src(paths.staticFiles)
    .pipe(gulp.dest('build/'));
});

gulp.task('svg', ['clean'], function() {
  return gulp.src(paths.svg)
    .pipe(gulp.dest('build/svg'));
});

gulp.task('mp3', ['clean'], function() {
  return gulp.src(paths.mp3)
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['onlyscripts']);
  gulp.watch(paths.css, ['onlycss']);
  gulp.watch(paths.images, ['onlyimages']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch','scripts','images','css','static-files','svg','mp3'])