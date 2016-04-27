var SystemBuilder = require('systemjs-builder');

var builder = new SystemBuilder();

builder.loadConfig('./system.config.js')
  .then(function(){
	  return builder.buildStatic('app', 'dist/bundle.js')
  })
  .then(function(){
	  console.log('bundle built successfully!');
  })
