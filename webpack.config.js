var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    './src/js/index.js' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    /*loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ }
    ]*/
    loaders: [{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader?presets[]=es2015&presets[]=react',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader?modules'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.less', '.css', '.png']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
};