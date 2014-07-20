var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/app.js',
    vendor: './app/vendor.js',
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor.js')
  ],
  externals: {
    'jquery': 'jQuery'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};
