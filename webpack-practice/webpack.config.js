var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
	 test: /\.(png|jpg)$/,
	 loader: 'url-loader?limit=8192' 
      }
    ]
  }
};
