const path = require('path');

module.exports = {
  mode: 'development',
  entry: './assets/src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'assets/public'),
    filename: 'main.js',
  },
};