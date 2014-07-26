var webpack            = require('webpack');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var DefinePlugin       = webpack.DefinePlugin;

module.exports = {
  entry: {
    app: './app/app.js',
    vendor: './app/vendor.js',
  },
  output: {
    path: 'dist/assets',
    filename: '[name].js'
  },
  externals: {
    'jquery': 'jQuery'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader') }
    ],
  },
  plugins: [
    new CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV ? process.env.NODE_ENV : '')
      }
    }),
    new ExtractTextPlugin('app.css', { allChunks: true })
  ],
};
