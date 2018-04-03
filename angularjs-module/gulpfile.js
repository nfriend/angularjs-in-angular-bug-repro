/* Note: you can find all task implementations in the ./gulp directory */

const gulp = require('gulp');
const requireDir = require('require-dir');
const runSequence = require('run-sequence');
requireDir('./gulp');

// builds this module and places the output
// in the ./dist directory
gulp.task('build', done => {
    runSequence(
        ['clean'],
        ['webpack', 'tslint'],
        done
    );
});

// builds and then rebuilds when files change
gulp.task('build:watch', done => {
    runSequence(
        ['clean'],
        ['webpack:watch', 'tslint'],
        done
    );
});


// aliases

// "build" and "dist" used to do different 
// things - now they do the same thing.
gulp.task('dist', ['build']);
gulp.task('build:dist', ['build']);

gulp.task('default', ['build']);