
var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path')
var argv = require('yargs').argv


var pckgJSON = require("./package.json")
var prod = argv.prod || false
var entrypath = path.join(__dirname, './clientsrc/entries/')
var distFolder = path.join(__dirname, "public/js")

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
    path: distFolder,
    filename: "[name]." + pckgJSON.version + ".js"
  },
  
  
  // If not prod then use sourcemaps
  devtool: prod ? null : "inline-source-map",
  
  
  // Use plugins based on env
  plugins: ([
    _ =>
      prod ?
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }) 
      : null,
    _ =>
      new CleanWebpackPlugin([distFolder], {
        verbose: true, 
        dry: false
      })
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