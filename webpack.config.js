const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
	const config = {
		splitChunks: {
			chunks: 'all'
		}
	};

	if (isProd) {
		config.minimizer = [
			new TerserWebpackPlugin,
			new CssMinimizerPlugin,
		]
	}

	return config;
}

const htmlPageNames = [
	'about',
	'method',
	'team',
	'team-item',
	'programs',
	'programs-item',
	'special',
	'tests',
	'test',
	'blog',
	'blog-item',
	'tutorials',
	'contact',
	'for-partners',
	'thank-you',
];
const multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HTMLWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`,
  });
});

const plugins = () => {
	const plugins = [
		new ESLintPlugin(),
		new HTMLWebpackPlugin({
			template: './src/index.html',
			minify: {
				collapseWhitespace: isProd
			}
		}),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/favicon.png'),
					to: path.resolve(__dirname, 'build')
				},
				{
					from: path.resolve(__dirname, 'src/images'),
					to: path.resolve(__dirname, 'build/images'),
					noErrorOnMissing: true,
				},
			]
		}),
		new MiniCssExtractPlugin({
			filename: filename('css')
		})
	].concat(multipleHtmlPlugins);

	return plugins;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

let conf = {
	entry: ['./src/js/index.js'],
	output: {
		filename: filename('js'),
		path: path.resolve(__dirname, './build')
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	optimization: optimization(),
	devServer: {
		port: 4200,
		hot: false,
	},
	devtool: isDev ? 'source-map' : '',
	plugins: plugins(),
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: './'
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|jpg|svg|webp)$/,
				loader: 'url-loader',
				options: {
					limit: 8192,
					name: 'images/[name].[ext]',
				}
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: ['babel-loader'],
			},
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
		]
	},
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
  },
};

module.exports = (env, argv) => {
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	conf.target = isProd ? 'browserslist' : 'web';
	return conf;
};