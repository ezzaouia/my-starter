/**
 * @author: @Med'eZ
 */

// A bit of imports
const WebpackMerge = require('webpack-merge');
const WebpackBaseConfig = require('./config/webpack-base.config');

// load webpack config by env: dev || prod || test
switch (process.env.NODE_ENV) {
  case 'prod':
    MergeLoadConfig('./config/webpack-prod.config');
    break;
  case 'test':
    MergeLoadConfig('./config/webpack-test.config');
    break;
  case 'dev':
  default:
    MergeLoadConfig('./config/webpack-dev.config');
    break;
}

// helper function
function MergeLoadConfig(envConfigFilename) {
  module.exports = WebpackMerge(WebpackBaseConfig, require(envConfigFilename))
}
