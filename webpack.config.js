
var path = require('path')
var webpack = require('webpack')

module.exports = {
  
  entry: {
    hero: "./clientsrc/entries/hero.js",
    menu: "./clientsrc/entries/menu.js",
  },
  
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].js"
  },
  
  devtool: "inline-source-map",

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }

}