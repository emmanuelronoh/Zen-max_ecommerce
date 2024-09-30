const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Matches .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,  // Matches .css files
        use: ['style-loader', 'css-loader'],  // Loaders for processing CSS
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Allow imports without specifying extensions
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve content from the public directory
    },
    compress: true,
    port: 8080,
  },
};
