// Example Gulp file that shows you how to run ES6 tests with Karma and Require

var gulp = require('gulp');
var karma = require('gulp-karma');
var to5 = require('gulp-6to5');

var paths = {
    src:      ['src/**.js', 'src/*/**.js'],
    dest:     'build/js',
    specSrc:  'spec/*Spec.js',
    specDest: 'build/spec',
    spec:     'build/spec/*Spec.js'
};

function build(src, dst) {
    var pipe = gulp.src(src).pipe(to5({ modules: "amd" })), dest = gulp.dest(dst);
    return pipe.pipe(dest);
}

gulp.task('build-src', function() {
    return build(paths.src, paths.dest);
});

gulp.task('build-test', function() {
    return build(paths.specSrc, paths.specDest);
});

gulp.task('test', function() {
    return gulp.src(['./non-exist.js'])
        .pipe(karma({
            configFile: 'spec/karma.conf.js',
            action: 'run'
        }));
});

gulp.task('build', ['build-src', 'build-test']);

gulp.task('default', ['build', 'test']);

gulp.on('err', function(e) {
    console.log(e.err.stack);
});
