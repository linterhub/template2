// External modules
var gulp = require("gulp"),
    hubRegistry = require("gulp-hub");

/* load tasks into the registry of gulp */
hubRegistry(["script/gulp/**/*.js"]);

/* Tasks */
gulp.task("release", "");
gulp.task("build", "");
gulp.task("test", "");
