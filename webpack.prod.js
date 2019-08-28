const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name][contentHash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmWebpackPlugin({
  			template: './src/template.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
  		})
    ]
  },
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name][contentHash].css'
		})
	],
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader, //extract css into files
				'css-loader',
				'sass-loader'
			]
		}, ]
	}
});
