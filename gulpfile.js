var fs = require("fs");
var browserify = require("browserify");
var gulp = require("gulp");
var git = require("gulp-git");
var rename = require("gulp-rename");
var source = require("vinyl-source-stream");
var jshint = require("gulp-jshint");
var stylish = require("jshint-stylish");
var del = require("del");
var serve = require("gulp-serve");

var gitInfo = function(output) {
    git.exec({args : "log -1 --pretty=format:'{ \"hash\" : \"%h\", \"timestamp\" : \"%ai\" }'"}, function (err, stdout) {
        if (err) throw err;

        fs.writeFileSync(output, stdout);
    });
};

gulp.task("clean", function() {
    return del(["build"]);
});

gulp.task("browserify", ["static"], function() {
    var input = "js/reporting.js";
    var output = "reporting.js";

    var stream = browserify(input).bundle();

    // no minify/uglify for now

    return stream
        .pipe(source(input))
        .pipe(rename(output))
        .pipe(gulp.dest("build"));
});

gulp.task("jshint", function() {
    return gulp.src(["js/**/*.js"])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task("prep", ["clean", "jshint"]);

gulp.task("static", ["prep"], function() {
    return gulp.src(["css/**/*.css", "fonts/*", "images/**/*.???", "index.html", "template/**/*.html"], {
            base: "."
        })
        .pipe(gulp.dest("build"));
});

gulp.task("default", ["browserify"], function() {
    gitInfo("build/git.json");
});

gulp.task("serve", ["default"], serve({
    root: ["build"],
    port: 8080
}));

gulp.task("watch", ["default"], function() {
    var watcher = gulp.watch(["js/**/*.js", "css/**/*.css", "fonts/*", "images/**/*.???", "index.html", "template/**/*.html"], ["default"]);

    watcher.on("change", function(event) {
        console.log(event.type + ": " + event.path);
    });
});