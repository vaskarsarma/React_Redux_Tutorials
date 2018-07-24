const webpack = require("webpack");
const path = require("path");
const DEST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const HTMLWebpackPlugin = require('html-webpack-plugin');
//const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: { main: SRC_DIR + '/app/index.js' },
    output: {
        path: DEST_DIR + "/app",
        //filename: "[name].[hash].js",
        filename: "bundle.js",
        publicPath: '/app/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: SRC_DIR,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true })
        //new ExtractTextPlugin({ filename: 'style.[hash].css', disable: false, allChunks: true }),
        // new HTMLWebpackPlugin({
        //     inject: false,
        //     hash: true,
        //     title: 'My Awesome application',
        //     myPageHeader: 'Hello World',
        //     template: './src/index.html',
        //     filename: 'index.html'
        // }),
        // new WebpackMd5Hash()
    ]
}