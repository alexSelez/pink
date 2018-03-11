"use strict";

var gulp = require("gulp");
var less = require("gulp-less");


gulp.task("style", function() {
  gulp.src("./less/style.less")
    .pipe(less())
    .pipe(gulp.dest("build/css"));
});

gulp.task("style-watch", function() {
  gulp.watch("./less/**/*.less", ["style"]);
});



