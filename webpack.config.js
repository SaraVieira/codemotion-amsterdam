const path = require('path'); //eslint-disable-line
const BabiliPlugin = require('babili-webpack-plugin');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMaps: true,
              importLoaders: 1,
              localIdentName: '[local]-[hash:base64:5]',
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new BabiliPlugin(),
    new NyanProgressPlugin(),
  ],
};
