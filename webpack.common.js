const path = require('path');
const HtmWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [new HtmWebpackPlugin({
		template: './src/template.html'
	})],
	module: {
		rules: [{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader']
		}]
	}
};
