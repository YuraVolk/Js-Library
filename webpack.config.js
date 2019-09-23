const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['./src/js/loader.js'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
    },
    devServer: {
      contentBase: './dist',
      disableHostCheck: true,
      staticOptions: {
        redirect: true
      }
    },
    plugins: [
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
      })
    ],
    optimization: {
      moduleIds: 'hashed',
      chunkIds: 'total-size',
      mangleWasmImports: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
          terserOptions: {
            mangle: true,
            ie11: false,
            ie8: false,
            safari10: true
          }
        }),
      ],
    }
  };

