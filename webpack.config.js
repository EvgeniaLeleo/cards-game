const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const { isDataView } = require('util/types');
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,

  entry: './src/js/index.js',
  devtool:
    process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'source-map',
  // devServer: {
  //   static: './dist',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  // resolve: { extensions: ['.js'] },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: { hmr: isDev, reloadAll: true },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/img', to: './img' },
        // { from: './src/data', to: './data' },
      ],
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      // files: {
      //   js: ['./src/js/index.js'],
      // },
    }),
  ],
};
