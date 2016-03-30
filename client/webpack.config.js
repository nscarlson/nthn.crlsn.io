var path = require('path');

module.exports = {
  entry: {
      'main': 'app/main'
  },
  output: {
    filename: "[name].js",
    path: "./public",
    sourceMapFilename: '[file].map'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
    root: [
        path.resolve('./')
    ]
  }
};
