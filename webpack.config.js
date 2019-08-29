const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("@babel/polyfill");

module.exports = {
    mode: 'development',
    entry: [
      './src/js/loader.js'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
    },
    devServer: {
      contentBase: './dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
      })
    ]
  };

