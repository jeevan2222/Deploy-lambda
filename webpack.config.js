const path = require('path');

module.exports = {
  entry: './handler.js', 
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'handler.js',
    libraryTarget: 'commonjs2',
  },
};
