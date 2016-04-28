var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.target = 'web';
  config.entry =  './main-browser.ts',
  config.output.filename = 'browser-bundle.js';

  config.node = {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  };

  return config;
};
