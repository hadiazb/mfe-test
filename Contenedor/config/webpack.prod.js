const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				header: `header@${domain}/header/remoteEntry.js`,
				footer: `footer@${domain}/footer/remoteEntry.js`,
				error404: `error404@${domain}/error404/remoteEntry.js`,
				home: `home@${domain}/home/remoteEntry.js`,
				contactenos: `contactenos@${domain}/contactenos/remoteEntry.js`,
				ayuda: `ayuda@${domain}/ayuda/remoteEntry.js`,
				breadcrumb: `breadcrumb@${domain}/breadcrumb/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
