const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// copy-webpack-plugin : to move files from src/ to dist/

module.exports = {
    // ... Configuración de empaquetado
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/fonts/[hash][ext][query]',
        publicPath: '/',
        clean: true,
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, '../src/components/'),
            '@containers': path.resolve(__dirname, '../src/containers/'),
            '@styles': path.resolve(__dirname, '../src/styles/'),
            '@icons': path.resolve(__dirname, '../src/assets/icons/'),
            '@img': path.resolve(__dirname, '../src/assets/img/'),
            '@pages': path.resolve(__dirname, '../src/pages/'),
            '@hooks': path.resolve(__dirname, '../src/hooks/'),
            '@context': path.resolve(__dirname, '../src/context/'),
            '@helpers': path.resolve(__dirname, '../src/helpers/')
        }
    },
    module: {
        // ... Lista de reglas respecto a los loaders	
        rules: [
            // Reglas para babel
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            // Reglas para HTML loader
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            /* {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/imgs/[name][ext]"
                }
            }, */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/fonts/[name][ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};