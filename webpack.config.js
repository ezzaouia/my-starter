'use strict';
/**
 * @author: @Med'eZ
 */

// A bit of imports
const helpers = require('./utils/helpers');

// load webpack config by env: dev || prod || test
switch (process.env.NODE_ENV) {
  case 'prod':
    helpers.exportModule(helpers.getWebpackEnvConf('prod'));
    break;
  case 'test':
    helpers.exportModule(helpers.getWebpackEnvConf('test'));
    break;
  case 'dev':
  default:
    helpers.exportModule(helpers.getWebpackEnvConf('dev'));
    break;
}
