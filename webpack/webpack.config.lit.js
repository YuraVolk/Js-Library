const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const glob = require('glob');

const litHtmlFiles = glob.sync('./src/docs/lit/**/*.html');
const litHtmlPlugins = litHtmlFiles.map((file) => {
  return new HtmlWebpackPlugin({
    template: file,
    filename: file.replace(/^\.\/src\/docs\/lit\//, 'lit/'),
  });
});

module.exports = {
  mode: 'development',
  entry: ['./src/modules/litEntry.ts'],
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'lit/index.html',
      template: './src/docs/entryLit.html',
    }),
    ...litHtmlPlugins,
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
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
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]'
        }
      }
    ]
  }
};
