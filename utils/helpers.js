'use strict';
/**
 * @author: @Med'eZ
 */

// A bit of imports
const path = require('path');

function root(...args) {
  return path.join(path.resolve(__dirname, '..'), ...args);
}

function exportModule(envConfigFilename) {
  module.exports = require(envConfigFilename)
}

function getWebpackEnvConf(__ENV) {
  let WPConf = root('config', 'webpack');
  return `${WPConf}/webpack-${__ENV}.config.js`;
}

exports.root = root;
exports.exportModule = exportModule;
exports.getWebpackEnvConf = getWebpackEnvConf;
