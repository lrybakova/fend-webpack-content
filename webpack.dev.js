const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: '/\.js*/',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/client/views/index.html",
    filename: "./index.html",
    path: path.resolve(__dirname, './src/client/views'),
  }),
  new CleanWebpackPlugin({
     // Simulate the removal of files
     dry: true,
     // Write Logs to Console
     verbose: true,
     // Automatically remove all unused webpack assets on rebuild
     cleanStaleWebpackAssets: true,
     protectWebpackAssets: false
  }),
 // new BundleAnalyzerPlugin(),
],
};
