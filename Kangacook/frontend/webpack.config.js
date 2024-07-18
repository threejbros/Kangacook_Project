import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const isProduction = 'production'

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