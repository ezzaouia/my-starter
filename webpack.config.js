/**
 * @author: @Med'eZ
 */
'use strict';


// load webpack config by env: dev || prod || test
switch (process.env.NODE_ENV) {
  case 'prod':
    exportConfig('./config/webpack-prod.config');
    break;
  case 'test':
    exportConfig('./config/webpack-test.config');
    break;
  case 'dev':
  default:
    exportConfig('./config/webpack-dev.config');
    break;
}

// helper function
function exportConfig(envConfigFilename) {
  module.exports = require(envConfigFilename)
}
