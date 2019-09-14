const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
      '@babel/polyfill', './src/js/loader.js'
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
    },
    devServer: {
      contentBase: './dist',
      disableHostCheck: true
    },
    plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: './src/index.html',
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
  };

