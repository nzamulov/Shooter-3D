'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + "/www/js",
	entry: "./Shooter.Game/Shooter.Game",
    output: {
        path: __dirname + "/www/build",        
        filename: "build.js"
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