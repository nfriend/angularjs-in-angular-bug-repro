const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const filter = require('gulp-filter');
const argv = require('yargs').argv;
const beeper = require('beeper');
const _ = require('lodash');

gulp.task('webpack', (done) => {
    runWebpack(false, done);
});

gulp.task('webpack:watch', (done) => {
    runWebpack(true, done);
});

function runWebpack(watch, done) {

    // operate on a copy of the config object so we don't change
    // the actual config value (since we might be require()-ing this elsewhere)
    const webpackConfig = _.cloneDeep(require('../webpack.config.js'));
    webpackConfig.watch = watch;

    webpack(webpackConfig, (err, stats) => {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log('[webpack]', stats.toString(webpackConfig.stats));

        chime();

        if (!watch) {
            done();
        }
    });
}

// plays a sound if the "--chime" flag was provided
function chime() {
    if (argv.chime) {
        beeper();
    }
}