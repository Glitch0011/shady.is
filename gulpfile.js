var gulp = require("gulp");

gulp.task("index", () => {
    return gulp.src("index.html")
    .pipe(gulp.dest("dist"));
});

gulp.task("site", () => {
    return gulp.src("./site/**")
    .pipe(gulp.dest("./dist/site"));
});

gulp.task("node_modules", () => {
    return gulp.src("./node_modules/**")
    .pipe(gulp.dest("./dist/node_modules"));
});

gulp.task("noJekyll",  () => {
    const path = require("path");
    const fs = require("fs");

    return new Promise((res, rej) => {

        fs.writeFile(path.join("./dist", ".nojekyll"), "", () => {
            res();
        });
    })
})

gulp.task("default", gulp.parallel("index", "site", "noJekyll", "node_modules"));