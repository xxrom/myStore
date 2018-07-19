const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['env', 'react', 'stage-3'],
            // presets: ['@babel/preset-env', 'react', 'stage-3'],
            // plugins: ['transform-runtime'],
            // include: ['transform-es2015-arrow-functions', 'es6.map'],
          }
        }
      }
    ]
  },

  plugins: [htmlWebpackPlugin]
};
