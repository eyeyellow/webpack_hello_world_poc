const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hello-world.js',
    library: 'MyLibrary',
    libraryTarget: 'umd'
  },
};
