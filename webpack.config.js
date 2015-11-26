const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const globalConfig = require('./global.config');

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:' + globalConfig.port,
    'webpack/hot/dev-server',
    './js/entry.js',
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file?name=[path][name].[ext]',
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webback | Webpack + Backbone + React',
      template: __dirname + '/app/templates/layouts/index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('styles.css'),
  ],
};
