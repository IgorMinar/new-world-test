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
    //   '@igorminar/core': path.resolve(__dirname, 'node_modules/@igorminar/core/esm/core.js'),
    //   '@igorminar/platform-browser': path.resolve(__dirname, 'node_modules/@igorminar/platform-browser/esm/platform_browser.js'),
    //   '@igorminar/router': path.resolve(__dirname, 'node_modules/@igorminar/router/esm/router.js'),
    //   '@igorminar/http': path.resolve(__dirname, 'node_modules/@igorminar/http/esm/http.js')
    // },
  },

};
