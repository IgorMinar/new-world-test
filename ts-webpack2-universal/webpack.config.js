var webpack = require('webpack');
var clone = require('js.clone');

var webpackConfig = {
  cache: false,

  devtool: 'source-map',

  output: {
    path: './dist',
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

}


module.exports = [
  require('./webpack.config-browser')(clone(webpackConfig)),
  require('./webpack.config-server')(clone(webpackConfig)),
]
