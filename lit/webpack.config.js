const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const glob = require('glob');

const litHtmlPlugins = glob.sync('./src/docs/lit/**/*.html').map((file) => {
  return new HtmlWebpackPlugin({
    template: file,
    filename: file.replace(/\\/g, "/").replace(/src\/docs\/lit\//, 'lit/'),
  });
});

module.exports = {
  mode: 'development',
  entry: ['./src/components/litEntry.ts'],
  devServer: {
		static: path.join(__dirname, "dist"),
		port: 3002
	},
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "lit",
      remotes: {
        shared: "shared@[sharedInterfacesUrl]/remoteEntry.js"
      }
    }),
    new ExternalTemplateRemotesPlugin(),
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
