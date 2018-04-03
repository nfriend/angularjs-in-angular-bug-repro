const webpackConfig = require('./webpack.config.js');
const yargs = require('yargs');
const path = require('path');

// you can choose which browsers to run unit tests in
// using the "browsers" command line flag like this:
// "gulp unit-test --browsers Chrome PhantomJS"
// if not provided, unit tests will run in Chrome
yargs.array('browsers');

// normally, we don't want third-party dependencies
// like angular or jquery bundles with the output of this module.
// But during tests, we need these dependencies included.
// Here we remove the configuration that strips out these dependencies
webpackConfig.externals = [];

webpackConfig.module.rules.push(
    {
        test: /\.tsx?$/i,
        use: [
            {loader: 'istanbul-instrumenter-loader'}
        ],
        exclude: [
            /\.spec\.ts$/,
            /run-tests\.ts$/,
            /test-utils\.ts$/
        ],
        enforce: 'post'
    }
);

module.exports = config => {
    config.set({
        basePath: '',
        browsers: yargs.argv.browsers || ['Chrome'],
        frameworks: ['jasmine', 'source-map-support'],
        reporters: ['coverage-istanbul', 'spec'],
        coverageIstanbulReporter: {
            // reports can be any that are listed here: https://github.com/istanbuljs/istanbul-reports/tree/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib
            reports: ['html', 'cobertura', 'text-summary'],

            // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
            dir: path.join(__dirname, 'coverage'),

            // if using webpack and pre-loaders, work around webpack breaking the source path
            fixWebpackSourcePaths: true,

            // stop istanbul outputting messages like `File [${filename}] ignored, nothing could be mapped`
            skipFilesWithNoCoverage: true,

            // Most reporters accept additional config options. You can pass these through the `report-config` option
            'report-config': {

                // all options available at: https://github.com/istanbuljs/istanbul-reports/blob/590e6b0089f67b723a1fdf57bc7ccc080ff189d7/lib/html/index.js#L135-L137
                html: {
                    // outputs the report in ./coverage/html
                    subdir: 'html'
                }
            },

            // enforce percentage thresholds
            // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
            // thresholds: {
            //     emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
            //     global: { // thresholds for all files
            //         statements: 100,
            //         lines: 100,
            //         branches: 0,
            //         functions: 100
            //     },
            //     each: { // thresholds per file
            //         statements: 100,
            //         lines: 100,
            //         branches: 0,
            //         functions: 100,
            //         //overrides: {
            //             //'baz/component/**/*.js': {
            //             //    statements: 98
            //             //}
            //         //}
            //     }
            // }
        },
        specReporter: {
            maxLogLines: 5,             // limit number of lines logged per test
            suppressErrorSummary: true, // do not print error summary
            suppressFailed: false,      // do not print information about failed tests
            suppressPassed: false,      // do not print information about passed tests
            suppressSkipped: true,      // do not print information about skipped tests
            showSpecTiming: false       // print the time elapsed for each spec
        },
        files: [
            { pattern: './src/run-tests.ts', watched: false, included: true },
        ],
        preprocessors: {
            '**/*.ts': ['webpack', 'sourcemap', 'coverage']
        },
        port: 9876,
        colors: true,

        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
    });
};