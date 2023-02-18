// Module import
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

// The main file
let entry = "./index.js";

// Expose the library as a global variable name
const libraryName = 'didconnect';

// Create the library as an UMD
// Ie Expose it for the browser and Node
const libraryTarget = 'window';

// Webpack will build by default in the dist subdirectory
let buildDirectory = 'dist';

// Minify
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;

var outputFile = 'prefix-' + libraryName + '.js';

console.log(env);

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
}

outputFile = libraryName + '.min.js';


module.exports = {
    mode: 'production',
    entry: entry,
    output: {
        filename: outputFile,
        library: libraryName,
        path: path.resolve(__dirname, buildDirectory),
        libraryTarget: libraryTarget,
        umdNamedDefine: true
    },
    devtool: 'source-map'
};