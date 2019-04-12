const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer: {
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ]
})
