var HtmlWebpackPlugin = require('html-webpack-plugin')
require('babel-polyfill')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
        {
          presets:['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.(png|jpg|TTF|ttf|svg|eot|woff|woff2)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  devServer: { inline:true, port:3000},
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ExtractTextPlugin('main.css'),
    HTMLWebpackPluginConfig
  ]
};
