const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globalConfig = require('./global.config');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: [
    'webpack-dev-server/client?http://localhost:' + globalConfig.port,
    'webpack/hot/only-dev-server',
    './js/entry.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file?name=[path][name].[ext]',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webback | Webpack + Backbone + React',
      template: __dirname + '/app/templates/layouts/index.html',
      inject: 'body',
    }),
  ],
};
