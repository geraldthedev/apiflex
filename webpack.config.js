const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
      app: './src/index.js',
      connect: './src/app.js',

  },
  plugins: [
      new CleanWebpackPlugin(['dist/*']),
     new HtmlWebpackPlugin({
       template: './src/index.html'
     })
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  node: {
    dns: 'empty',
   fs: "empty",
   module:"empty",
   net:"empty",
   tls: "empty"
},
module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
       use: [
          'file-loader'
        ]
      },
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
        {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }

     ]
   },

    devServer: {
    contentBase: './dist',
    inline:true,
    port: 3000
   }

};
module.exports = webpackConfig;