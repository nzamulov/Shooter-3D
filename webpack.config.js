'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + "/www/js",
	entry: "./controller",
    output: {
        path: __dirname + "/www/js",        
        filename: "build.js"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
    	aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'inline-source-map' : null,

    plugins: [ ],

    module: {

    	loaders: [{
    		test: /\.js$/,
    		loader: 'babel',
    		query: {
    			presets: ['es2015']
    		}
    	}]

    }

};

if("production" === NODE_ENV) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                unsafe: true
            }
        })
    );
}