
var path = require('path')
var webpack = require('webpack')
var argv = require('yargs').argv


var prod = argv.prod || false

if(prod) {
  console.info("building for production")
}


module.exports = {
  
  entry: {
    hero: "./clientsrc/entries/hero.js",
    menu: "./clientsrc/entries/menu.js",
  },
  
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].js"
  },
  
  devtool: prod ? null : "inline-source-map",
  
  plugins: ([
    () =>
      prod ?
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }) 
      : null
  ])
  .map(p => p())
  .filter(p => p !== null),

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