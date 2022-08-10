const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, "../.env.development"),
            systemvars: true,
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '../public')
        },
        compress: true,
        historyApiFallback: true,
        port: 3005
    }
});