const path = require('path')

module.exports = [
  {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'dev.js',
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
  },
  {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'prod.js',
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
]