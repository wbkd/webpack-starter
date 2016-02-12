module.exports = require('./webpack.config-generator')({
  isProduction: false,
  devtool: 'cheap-eval-source-map',
  port: 1337
});