const path = require ('path');

module.exports = {
  entry: {
    app: './client/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }]
  }
}