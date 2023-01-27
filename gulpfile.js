const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const rename = require("gulp-rename");
const { watch, series } = require("gulp");
const uglify = require("gulp-uglify");
const livereload = require("gulp-livereload");

gulp.task("scss", async function () {
  gulp
    .src("./assets/scss/styles.scss")
    .pipe(
      sass({
        includePaths: ["node_modules"],
      })
    )
    .pipe(prefix())
    .pipe(minify())
    .pipe(
      rename(function (path) {
        return {
          dirname: path.dirname + "",
          basename: path.basename + ".min",
          extname: ".css",
        };
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("js", async function () {
  gulp
    .src("./assets/js/scripts.js")
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        return {
          dirname: path.dirname + "",
          basename: path.basename + ".min",
          extname: ".js",
        };
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("watch", async function () {
  livereload.listen();
  watch(
    ["./assets/scss/styles.scss", "./assets/js/scripts.js"],
    series(["scss", "js"])
  );
});
