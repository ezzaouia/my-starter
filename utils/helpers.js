/**
 * @author: @Med'eZ
 */
'use strict';

// A bit of imports
const path = require('path');

function root(...args) {
  return path.join(path.resolve(__dirname, '..'), ...args);
};
exports.root = root

console.log('root ', root('src'));
