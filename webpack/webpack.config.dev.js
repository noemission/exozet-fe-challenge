const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', 'src/js/main.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'dist.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Frontend chalenge',
      template: path.resolve(__dirname, '..', 'src/html/index.html'),
    })],
  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
      }
    ]
  }
};