const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8005/',
	},
	devServer: {
		port: 8005,
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
		new ModuleFederationPlugin({
			name: 'contactenos',
			filename: 'remoteEntry.js',
			exposes: {
				'./ContactenosApp': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);