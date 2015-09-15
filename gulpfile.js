var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var babel = require('gulp-babel');
var connect = require('gulp-connect');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var errorify = require('errorify')

// task untuk compile jsx ke javascript

gulp.task('browserify', function(){
    var watcher = watchify(browserify({
        entries: './src/Main.jsx',
        transform: [reactify, babelify],
        debug: true,
        extensions: ['.jsx'],
        cache: {},
        fullPaths: true,
        packageCache: {}
    }).plugin(errorify));

    return watcher.on('update', function(){
        watcher.bundle()
            .pipe(source('build.js'))
            .pipe(gulp.dest('src'))
            .pipe(connect.reload())
            console.log("compiled")
    }).bundle()
        .pipe(source('build.js'))
        .pipe(gulp.dest('src'));
});

// task untuk livereload

gulp.task('connect', function(){
    connect.server({
        root: 'src',
        livereload: true
    })
})

// task untuk listen perubahan pada file .less

gulp.task('watchLess', function(){
    gulp.watch('**/*.less', ['lessCompile'])
});

// task untuk compiler less

gulp.task('lessCompile', function(){
  return gulp.src('./src/stylesheets/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./src/stylesheets/css'))
        .pipe(connect.reload());
});

// task untuk build untuk penggunaan production

gulp.task('build', function(){
    browserify({
        entries: ['./src/Main.jsx'],
        transform: [reactify, babelify],
        debug: false,
        extensions: ['.jsx'],
        cache: {},
        packageCache: {},
        fullPaths: true
    })
    .bundle()
        .pipe(source('build.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('src'))
});

gulp.task('default', ['browserify', 'watchLess', 'connect']);
