const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let extractSass = new ExtractTextPlugin('custom.css')

exports.default = {
  entry: './index.js',
  module: {
    rules: [{
      test: /\.sass$/,
      use: extractSass.extract({
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    extractSass
  ]
}
