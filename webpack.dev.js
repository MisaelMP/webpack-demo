const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmWebpackPlugin({
			template: './src/template.html'
		})
	],
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader', // inject styles into DOM
				'css-loader', // CSS into common js
				'sass-loader' // Scss into css
			]
		}, ]
	}
});
