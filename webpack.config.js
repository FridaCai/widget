var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: {
        CDropDown:'./src/dropdown/index.js',
    },
    output: {
        path: './dist',
        filename: "Lib.[name].js",
        library: ["Lib", "[name]"],
        libraryTarget: "umd"
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
            "$": "jquery",
            "jQuery":"jquery",
            "window.jQuery":"jquery"
        })
    ],
    cache: false,
    resolve: {
        alias: {
            "jquery-widget": "jquery.ui.widget/jquery.ui.widget.js",      
            modules: path.join(__dirname, "node_modules")
        }
    }
};
