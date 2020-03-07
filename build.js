const webpack = require('webpack')
const config = require('./webpack.config.js')

webpack(config, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('done')
  }
})