const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../docs'),
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
						loader: 'resolve-url-loader',
						options: {}
					},
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ],
                //exclude: '/node_modules/',
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                exclude: [
                    path.resolve(__dirname, `${PATHS.src}/${PATHS.assets}fonts`),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                            name: '[name].[ext]',
                        outputPath: 'assets/img/',
                    }
                },
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, //removed .svg here so that images are not damaged
                include: [
                    path.resolve(__dirname, `${PATHS.src}/${PATHS.assets}fonts`),
                ],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    outputPath: 'assets/fonts/',
                    },
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
            //    {from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img`},
                // {from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts`},
                {from: `${PATHS.src}/theme/favicon.ico`, to: ''},
            ],
        }),
        new CleanWebpackPlugin(),
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
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/ui-kit-form-elements/ui-kit-form-elements.pug`,
            filename: './ui-kit-form-elements.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/ui-kit-cards/ui-kit-cards.pug`,
            filename: './ui-kit-cards.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/ui-kit-headers-footers/ui-kit-headers-footers.pug`,
            filename: './ui-kit-headers-footers.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/registration/registration.pug`,
            filename: './registration.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/signin/signin.pug`,
            filename: './signin.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/landing-page/landing-page.pug`,
            filename: './landing-page.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/landing-page-dates/landing-page-dates.pug`,
            filename: './landing-page-dates.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/landing-page-guests/landing-page-guests.pug`,
            filename: './landing-page-guests.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/search-room-filter/search-room-filter.pug`,
            filename: './search-room-filter.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/search-room-filter-dropdown/search-room-filter-dropdown.pug`,
            filename: './search-room-filter-dropdown.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/search-room-filter-checkbox/search-room-filter-checkbox.pug`,
            filename: './search-room-filter-checkbox.html',
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/room-details/room-details.pug`,
            filename: './room-details.html',
            inject: true
        }),
        // Used the ProvidePlugin constructor to inject jquery implicit globals
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery'",
            "window.$": "jquery",
        }),
    ],
    resolve: {
		//extensions: [],
		alias: {
		//	'@styles': path.resolve(__dirname, `${PATHS.src}/styles`),
			'~': PATHS.src,
		}
	},
}