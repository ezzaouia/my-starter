/**
 * @author: @Med'eZ
 */
'use strict';

// A bit of imports
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const helpers = require('../utils/helpers');

// webpack config
module.exports = {
  entry: {
    'main': 'main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [helpers.root('src'), helpers.root('node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My starter @Med\'eZ',
      template: 'src/index.html'
    })
  ]
}
