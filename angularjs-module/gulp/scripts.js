const gulp = require('gulp');
const tslint = require('gulp-tslint');

gulp.task('tslint', () => {
    return runTsLint(false);
});

gulp.task('tslint:dist', () => {
    return runTsLint(true);
});

function runTsLint(emitError) {
    return gulp.src('./src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report({ emitError: emitError }));
}