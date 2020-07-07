const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/pug/pages`;
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
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '', //removed '/' in brackets here
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
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}, },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ],
            },
            {
                test: /\.scss$/,
                    use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: {path: `${PATHS.src}/js/postcss.config.js`}, },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/[name].css`,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: `${PATHS.src}/img`, to: `${PATHS.assets}img`},
                {from: `${PATHS.src}/static`, to: ''},
            ],
        }),
        ...PAGES.map(
            page =>
              new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/${page}`,
                filename: `./${page.replace(/\.pug/,'.html')}`
              })
          )
    ]
}