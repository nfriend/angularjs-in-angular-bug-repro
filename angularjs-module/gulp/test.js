const gulp = require('gulp');
const gutil = require('gulp-util');
const karma = require('karma');
const path = require('path');

gulp.task('test', done => {
    startKarmaServer(done, true);
});

gulp.task('test:watch', done => {
    startKarmaServer(done, false);
});

function startKarmaServer(done, singleRun) {
    new karma.Server({
        configFile: path.join(__dirname, '../karma.conf.js'),
        singleRun: singleRun
    }, (exitCode) => {
        if (exitCode !== 0) {
            gutil.log('Karma exited with code ' + gutil.colors.red(exitCode + ''));
        }
        done();
    }).start();
}

// also alias these tasks to "unit-test", since 
// this is what we named these tasks in the app generator
gulp.task('unit-test', ['test']);
gulp.task('unit-test:watch', ['test:watch']);