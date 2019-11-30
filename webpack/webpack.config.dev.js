const Path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js'
  },
  devServer: {
    inline: true
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      }
    ]
  }
});
