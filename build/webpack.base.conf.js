const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
    assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/pages`;
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter(fileName => fileName.endsWith(".pug"));

module.exports = {
    externals: {
        paths: PATHS,
    },
    entry: {
        app: PATHS.src,
    },
    output: {
        filename: `${PATHS.assets}js/[name].[hash].js`,
        path: PATHS.dist,
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
//            {
//                test: /\.css$/,
//                use: [
//                    'style-loader',
//                    {
//                        loader: MiniCssExtractPlugin.loader,
//                        options: {publicPath: '../../'},
//                    },
//                    {
//                        loader: 'css-loader',
//                        options: { sourceMap: true }
//                    },
//                    {
//                        loader: 'postcss-loader',
//                        options: { sourceMap: true, config: {path: `./postcss.config.js`}, },
//                    },
//                    {
//                        loader: 'sass-loader',
//                        options: { sourceMap: true }
//                    },
//                ],
//            },
            {
                test: /\.s?css$/,
                    use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: '../../'},
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: {path: `./postcss.config.js`}, },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ],
                exclude: '/node_modules/',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                		name: '[name].[ext]',
                    outputPath: 'assets/img/',
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                	name: '[name].[ext]',
                  outputPath: 'assets/fonts/',
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].[hash].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
                {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
                {from: `${PATHS.src}/theme/favicon.ico`, to: ''},
            ],
        }),
//        ...PAGES.map(
//            page =>
//              new HtmlWebpackPlugin({
//                template: `${PAGES_DIR}/${page}`,
//                filename: `./${page.replace(/\.pug/,'.html')}`
//              })
//         ),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/index/index.pug`,
            filename: './index.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/ui-kit-colors/ui-kit-colors.pug`,
            filename: './ui-kit-colors.html',
            inject: true
        }),
        // Used the ProvidePlugin constructor to inject jquery implicit globals
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery",
        }),
    ]
}