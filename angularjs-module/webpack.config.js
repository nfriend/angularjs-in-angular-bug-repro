const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./src/index'],
    output: {
        filename: 'angularjs-module.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.jsx'],
        alias: {
            // aliasing a package name to an absolute file path ensures that 
            // a single version of the module will be used throughout the app.
            // This is one way to solve the warnings thrown by the 
            // "DuplicatePackageCheckerPlugin" (see the "plugins"" section below)

            angular: path.resolve(__dirname, 'node_modules/angular')
        }
    },
    externals: [

        // this ensure that nothing in the node_modules directory
        // gets included in the output bundle
        nodeExternals({ importType: 'umd' })
    ],

    // some plugins are added dynamically by the gulp build
    plugins: [

        // if two versions of the same package are included in the output bundle,
        // this plugin will throw warnings in the console
        new DuplicatePackageCheckerPlugin({
            verbose: true
        }),

        new CopyWebpackPlugin([{
            context: 'src',
            from: '**/*.less',
            to: 'less'
        }]),

        // this plugin creates an HTML files that nicely visualizes the
        // contents of the Webpack build.  Uncomment to create this file.
        // new Visualizer({ filename: './webpack-stats-visualizer.html' })
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            },
            {
                test: /\.tsx?$/i,
                use: [
                    { loader: 'ng-annotate-loader', },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: false,
                        minimize: true,
                        collapseWhitespace: true,
                        conservativeCollapse: true,
                    }
                }
            },
            {
                test: /\.less$/i,
                use: [
                    'noop-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false, 
                            import: false, 
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            paths: [path.resolve(__dirname, 'node_modules')],
                            relativeUrls: false
                        }
                    }
                ]
            }
        ]
    },
    stats: {
        assets: false,
        colors: true,
        chunks: false,
        hash: false,
        version: false,
        warnings: true,
        modules: false,
    }
};