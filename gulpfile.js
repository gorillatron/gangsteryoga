const gulp = require("gulp")
const path = require("path")
const gutil = require("gulp-util")
const gulp_if = require("gulp-if")
const cleanCSS = require('gulp-clean-css');
const webpack = require("webpack")
const postcss = require('gulp-postcss')
const argv = require('yargs').argv
const webpackConfig = require("./webpack.config.js")


const prod = argv.prod || false


prod ? 
  console.info("building for production"):
console.info("building for development")



gulp.task("default", ["watch-css", "watch-js"])


gulp.task("build", ["webpack", "css"])


gulp.task("webpack", (callback) => {
  webpack(webpackConfig, (err, stats) => {

    if(err) 
      throw new gutil.PluginError("webpack", err)

    gutil.log("[webpack]", stats.toString({
        // output options
    }))

    callback()

  })
})


gulp.task('watch-js', ["webpack"], () => {
  gulp.watch("./clientsrc/js/**/*.js", ["webpack"])
})


gulp.task('css', function () {
  var processors = [
    require('postcss-vars').processor,
    require('postcss-import')({}),
    require('postcss-nested')({}),
    require('postcss-custom-media')({}),
    require('postcss-custom-properties')({}),
    require('postcss-calc')({}),
    require('postcss-color-function')({}),
    require('postcss-discard-comments')({}),
    require('postcss-image-inliner')({
      assetsPaths: [
        path.join(__dirname, "./clientsrc")
      ]
    }),
    require('autoprefixer')({})
  ]
  return gulp.src('./clientsrc/css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp_if(prod, cleanCSS()))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch-css', ["css"], () => {
  gulp.watch("./clientsrc/css/**/*.css", ["css"])
})