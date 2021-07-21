const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: './home/latest/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederationPlugin({
			name: 'home',
			filename: 'remoteEntry.js',
			exposes: {
				'./HomeApp': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
