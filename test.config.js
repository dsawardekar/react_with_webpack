var webpack = require('webpack');
var glob    = require('glob');

var getTests = function() {
  var entry = {};
  var files = glob.sync('test/**/*.js');

  files.forEach(function(file) {
    entry[file] = './' + file;
  });

  return entry;
};

module.exports = {
  entry: getTests(),
  output: {
    path: 'build',
    filename: 'tests.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' }
    ]
  }
};
