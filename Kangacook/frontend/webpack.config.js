import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'
// const path = require('path');
// const webpack = require('webpack');

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isProduction = 'production'

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//       path: path.resolve(__dirname, "./static/frontend"),
//       filename: "[name].bundle.js",
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: "babel-loader",
//           },
//         },
//       ],
//     },
//     optimization: {
//       minimize: true,
//     },
//     plugins: [
//       new webpack.DefinePlugin({
//         "process.env": {
//           // This has effect on the react lib size
//           NODE_ENV: JSON.stringify("production"),
//         },
//       }),
//     ],
// };

const config = {
    entry: {
        index: './src/index.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './static/frontend'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    optimization: {
        minimize: true
        // splitChunks: {
        //     name: 'vendor',
        //     chunks: 'all',
        // }
    },
    devtool: 'source-map'
}

export default function() {
    if(isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}