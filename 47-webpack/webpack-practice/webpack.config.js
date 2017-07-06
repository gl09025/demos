var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders:[
      {
        test: /\.scss$/,
        loaders:[
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'sass-loader'
        ] 
      },
      {
        test: /\.less$/,
        loaders:[
          'style-loader',
          'css-loader',
          'autoprefixer-loader',
          'less-loader'
        ] 
      },
      { 
    test: /\.(png|jpg)$/,
      loaders: [
        'url-loader?limit=8192',
        'image-webpack-loader'
      ]
        }
      ]
    },
      plugins: [
      new HtmlwebpackPlugin({
        title: 'Webpack-demos',
        filename: 'index.html'
      })
    //   new OpenBrowserPlugin({
    //     url: 'http://localhost:8080'
    //   })
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8080
    }

};
