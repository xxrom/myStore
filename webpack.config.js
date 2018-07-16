var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },

  resolve: {
    extensions: ['js', 'jsx'],
  },
  plugins: [new HtmlWebpackPlugin()],
};
