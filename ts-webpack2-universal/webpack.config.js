var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');

var webpackConfig = {
  cache: false,

  devtool: 'source-map',

  output: {
    path: './dist',
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

}
var commonConfig = {
  module: {
    loaders: [
      // .ts files for TypeScript
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}

function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function merge(obj) {
  return webpackMerge(clone(obj), obj);
}

function common(obj) {
  return webpackMerge(commonConfig, obj);
}


module.exports = [
  common(require('./webpack.config-browser')(clone(webpackConfig))),
  common(require('./webpack.config-server')(clone(webpackConfig))),
]
