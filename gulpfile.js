const gulp = require("gulp")
const gutil = require("gulp-util")
const webpack = require("webpack")
const postcss = require('gulp-postcss')
const webpackConfig = require("./webpack.config.js")


gulp.task("default", ["watch-css", "watch-js"])


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
    require('postcss-import')({}),
    require('postcss-custom-media')({}),
    require('postcss-custom-properties')({}),
    require('postcss-calc')({}),
    require('postcss-color-function')({}),
    require('postcss-discard-comments')({}),
    require('autoprefixer')({})
  ]
  return gulp.src('./clientsrc/css/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch-css', ["css"], () => {
  gulp.watch("./clientsrc/css/**/*.css", ["css"])
})