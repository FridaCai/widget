var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        app:'./index2.js',
    },
    output: {
        path: './dist',
        filename: "MyLibrary.[name].js",
        library: ["MyLibrary", "[name]"],
        libraryTarget: "umd"
    },
    externals: {
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
                exclude: /node_modules/,
                loaders: ['babel-loader'],
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
            },

            {
                test: /\.scss$/,
                loader: 'style!css!sass',
            },
            { 
                test: /\.css$/, 
                loader: 'style!css'
            }
        ],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
        })
    ],
    cache: false,
};
