const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    js: './js/entry.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-2', 'react'],
      },
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'file-loader?name=[path][name].[ext]',
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webback | Webpack + Backbone + React',
    template: __dirname + '/app/templates/layouts/index.html',
    inject: 'body',
  })],
};
