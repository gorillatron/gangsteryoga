
var path = require('path')
var webpack = require('webpack')
var path = require('path')
var argv = require('yargs').argv


var prod = argv.prod || false
var entrypath = path.join(__dirname, './clientsrc/entries/')

prod && 
  console.info("building for production")


module.exports = {
  
  /**
   * Mainfiles of the client pages
   * These will be built as singel files to the public folder
   */
  entry: {
    hero: path.join(entrypath, 'hero.js'),
    menu: path.join(entrypath, 'menu.js'),
  },
  
  output: {
    path: path.join(__dirname, "public/js"),
    filename: "[name].js"
  },
  
  
  // If not prod then use sourcemaps
  devtool: prod ? null : "inline-source-map",
  
  
  // Use plugins based on env
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
  
  
  // Compile using babel
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