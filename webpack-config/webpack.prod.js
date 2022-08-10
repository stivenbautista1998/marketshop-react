const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/imgs/[name][ext]"
                }
            }
        ]
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, "../.env.production"),
            systemvars: true,
        })
    ]
});