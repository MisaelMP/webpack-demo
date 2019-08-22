const path = require('path');
const HtmWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	},
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
