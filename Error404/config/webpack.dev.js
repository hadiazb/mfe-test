const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8003/',
	},
	devServer: {
		port: 8003,
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederationPlugin({
			name: 'error404',
			filename: 'remoteEntry.js',
			exposes: {
				'./Error404App': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);