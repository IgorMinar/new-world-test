var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: false,

  devtool: 'source-map',

  entry: './hello_world.ts',

  output: {
    path: './dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      // .ts files for TypeScript
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },

  plugins: [
  ],

  resolve: {

    extensions: ['', '.ts', '.js'],

    // alias: {
    //   '@angular/core': path.resolve(__dirname, 'node_modules/@angular/core/esm/core.js'),
    //   '@angular/platform-browser': path.resolve(__dirname, 'node_modules/@angular/platform-browser/esm/platform_browser.js'),
    //   '@angular/router': path.resolve(__dirname, 'node_modules/@angular/router/esm/router.js'),
    //   '@angular/http': path.resolve(__dirname, 'node_modules/@angular/http/esm/http.js')
    // },
  },

};
