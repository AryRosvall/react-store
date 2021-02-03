const path = require('path')
/* const webpack = require('webpack') */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
/* const DotenvWebpackPlugin = require('dotenv-webpack') */
const { EnvironmentPlugin } = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    /* new DotenvWebpackPlugin({ systemvars: true }), */
    new EnvironmentPlugin([
      'CLIENT_ID_PAYPAL',
      'CLIENT_ID_GOOGLE_MAPS',
      'CLIENT_ID_POSITIONSTACK',
    ]),
  ],
  devServer: {
    contentBase: './',
    compress: true,
    port: 3005,
    open: true,
    historyApiFallback: true,
  },
}
