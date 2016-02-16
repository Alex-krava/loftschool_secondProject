var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    wiredep = require('wiredep').stream,
    rimraf = require('gulp-rimraf'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    spritesmith = require('gulp.spritesmith'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade');


//wiredep bower
gulp.task('wiredep',['sass', 'jade'], function () {
    gulp.src('app/*.html')
       .pipe(wiredep())
       .pipe(gulp.dest('app/'));
})

//assembly in .../dist
gulp.task('useref', function () {
    return gulp.src('app/*html')
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss({ compatibility: 'ie8' })))
        .pipe(gulpif('*.css', autoprefixer({ browsers: ['last 10 versions'] })))
        .pipe(useref())
        .pipe(gulp.dest('dist'));
})

//generate sprite at add /dist
gulp.task('spriteDist', function () {
  var spriteData = gulp.src('app/img/icon/*.png')
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        padding: 15
  }));
  return spriteData.pipe(gulp.dest('dist/img/'));
});

//add folder /dist
gulp.task('build', ['clean'], function () {
    gulp.start('dist');
});

gulp.task('dist', ['useref', 'spriteDist']);

//clean .../dist
gulp.task('clean', function () {
    return gulp.src('dist', { read: false }) //much faster
    .pipe(rimraf());
})

// Server
gulp.task('server', function () {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

//Sass
gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sass({outputStyle:'​compressed'}))
    .pipe(gulp.dest('app/css'));
});

//Watch
gulp.task('watch', function () {
    gulp.watch('app/jade/**/*.jade', ['jade', 'wiredep']);
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch([
    'app/*.html',
    'app/pages/*.html',
    'app/js/*.js',
    'app/css/*.css'
    ]).on('change', browserSync.reload);
}
);

//Jade
gulp.task('jade', function () {
    var YOUR_LOCALS = {};

    gulp.src('app/jade/*.jade')
      .pipe(jade({
          locals: YOUR_LOCALS,
          pretty: true
      }))
      .pipe(gulp.dest('app/'))
});

//Generates Sprite
gulp.task('sprite', function () {
  var spriteData = gulp.src('app/img/icon/*.png')
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        padding: 15
  }));
  return spriteData.pipe(gulp.dest('app/img/icon/'));
});

//Default
gulp.task('default', ['wiredep', 'server', 'watch']);


