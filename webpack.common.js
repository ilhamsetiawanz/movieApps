const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename:'index.html'
    }),
    new CopyWebpackPlugin ({
      patterns: [
        {
          from: path.resolve(__dirname, './src/style'),
          to: path.resolve(__dirname, 'dist/style')
        },
        {
          from: path.resolve(__dirname, './src/page'),
          to: path.resolve(__dirname, 'dist/page')
        },
        {
          from: path.resolve(__dirname, './src/asset'),
          to: path.resolve(__dirname, 'dist/asset')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
