var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack', function() {
	return gulp.src('./src/entry.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
	gulp.watch('./src/entry.js', ['webpack']);
});

gulp.task('default', ['webpack', 'watch']);

/*var gulp = require('gulp');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');


var myConfig = Object.create(require('./webpack.config.js'));
myConfig.devtool = 'eval';
myConfig.debug = true;

gulp.task('default', function() {
	var compiler = webpack(myConfig);
	new WebpackDevServer(compiler, {
		stats: {
			colors: true
		},
		hot: true,
		historyApiFallback: false,
		contentBase: './src/',
		publicPath: '/src/',
		quiet: false,
		noInfo: false,
		lazy: false,
		//inline: true,
		proxy: {
			'*': 'http://localhost:8080'
		},
	}).listen(8080, 'localhost', function(err) {

	});
});*/