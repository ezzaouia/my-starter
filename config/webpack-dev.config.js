/**
 * @author: @Med'eZ
 */
const WebpackMerge = require('webpack-merge');
const WebpackBaseConfig = require('./webpack-base.config');
const helpers = require('../utils/helpers');

module.exports = WebpackMerge(WebpackBaseConfig, {
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  plugins: [

  ],
  devServer: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
})
