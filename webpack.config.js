var webpack = require('webpack');

module.exports = {
	entry: {
		index: [
			/*'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',*/
			'./src/entry.js'
		]
	},

	//输出配置
	output: {
		path: __dirname + './dist/',
		filename: 'bundle.js',
	},

	module: {
		//加载器配置
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.js$/,
			loader: 'babel'
		}]
	},

	//
	resolve: {
		extensions: ['', '.js', '.jsx', '.json', '.less'],
	},

	plugins: [
		//new webpack.HotModuleReplacementPlugin(),
		//new webpack.NoErrorsPlugin()
	]
}