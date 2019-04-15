const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    inline: true,
    hot: true,
    port: 3000,
    open: true,
    noInfo: true
  },
})
