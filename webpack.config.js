const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'system',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devtool: 'sourcemap',
  mode: 'development',
  externals: {
    foo: './foo.js',
    bar: './bar.js',
    axios: 'axios'
  }
}