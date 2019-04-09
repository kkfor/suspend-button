const path = require('path')

module.exports = {
  entry: './example/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/
      }
    ]
  }
}