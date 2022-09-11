const path = require('path');

module.exports = {
  entry: './src/eatWhat.js',
  output: {
    filename: 'eatWhat.js',
    path: path.resolve(__dirname, 'dist', 'javascripts'),
  },
};