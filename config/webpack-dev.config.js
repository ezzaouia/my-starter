/**
 * @author: @Med'eZ
 */
const WebpackMerge = require('webpack-merge');
const WebpackBaseConfig = require('./webpack-base.config');
const helpers = require('../utils/helpers');

const METADATA = WebpackMerge(WebpackBaseConfig.metadata, {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  ENV: process.env.ENV = process.env.NODE_ENV = 'dev',
  HMR: true
});

module.exports = WebpackMerge(WebpackBaseConfig, {
  devtool: 'cheap-module-source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  plugins: [

  ],
  devServer: {
    contentBase: helpers.root('src'),
    compress: true,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
})
