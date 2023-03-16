const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  output: {
    path: Path.join(__dirname, '../build'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }],
    }),
    new HtmlBundlerPlugin({
      entry: {
        // define templates here, the syntax is the same as Webpack entry
        index: 'src/index.html',
      },
      js: {
        filename: isDev ? 'js/[name].js' : 'js/[name].[contenthash:8].js', // output filename of extracted JS
      },
      css: {
        inline: 'auto', // in dev mode inline CSS in HTML, in prod mode extract into a CSS file
        filename: 'css/[name].[contenthash:8].css', // output filename of extracted CSS
      },
    }),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        type: 'asset'
      },
    ],
  },
};
