var path = require('path');

const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg = require('./package.json');

const sassLoaders = [
  'css-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, 'app/style')
]

const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  entry: {
      'main': 'app/main',
      'style': 'app/style/application.scss'
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, './build'),
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
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass",
        exclude: /(node_modules|bower_components)/ },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/templates/index.ejs',
      title: 'crlsn app',
      appMountId: ['app'],
      inject: false
    }),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules'],
    root: [
        path.resolve('./'),
        path.resolve('./app/style')
    ]
  }
};
