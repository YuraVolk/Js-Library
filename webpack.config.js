const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const JavaScriptObfuscator = require('webpack-obfuscator');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [/*IE*/ /*'@babel/polyfill',*/'./src/js/loader.js'],
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './docs',
    disableHostCheck: true,
    staticOptions: {
      redirect: true
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new BrotliPlugin({
      asset: '[path].br[query]',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new JavaScriptObfuscator({
      rotateUnicodeArray: true
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/less/styles',
        to: 'source-css',
        copyUnmodified: true
      },
      {
        from: 'src/js/scripts',
        to: 'source-js'
      },
      {
        from: 'src/index.html',
        to: 'source-html/source.html'
      }
    ]),
    new EncodingPlugin({
      exclude: /node_modules/,
      test: /(\.js|\.css|\.less)($|\?)/i,
      encoding: 'utf8'
    })
  ],
  optimization: {
    moduleIds: 'hashed',
    chunkIds: 'total-size',
    mangleWasmImports: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/,
        terserOptions: {
          mangle: true,
          ie11: false,
          ie10: false,
          ie9: false,
          ie8: false,
          safari10: true
        }
      })
    ]
  },
  module: {
    rules: [
      /*{ // IE
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader'
       }
     },*/
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              noIeCompat: true
            }
          }
        ]
      }
    ]
  }
};
