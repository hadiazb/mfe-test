const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8000/',
	},
	devServer: {
		port: 8000,
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				header: 'header@http://localhost:8001/remoteEntry.js',
				footer: 'footer@http://localhost:8002/remoteEntry.js',
				error404: 'error404@http://localhost:8003/remoteEntry.js',
				home: 'home@http://localhost:8004/remoteEntry.js',
				contactenos: 'contactenos@http://localhost:8005/remoteEntry.js',
				ayuda: 'ayuda@http://localhost:8006/remoteEntry.js',
				breadcrumb: 'breadcrumb@http://localhost:8007/remoteEntry.js',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, devConfig);