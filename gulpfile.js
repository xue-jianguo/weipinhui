const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
})

gulp.task("sass", done => {

    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
});

gulp.task("server", done => {

    connect.server({
        root: "dist",
        livereload: true
    })

    done();

});

gulp.task("watch", done => {

    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));

    done();
});

//复制图片
gulp.task('copyimg',done =>{
    return gulp.src('img/*.png')
    .pipe(gulp.dest("dist/img"))
    done();
})
gulp.task('copyimg1',done =>{
    return gulp.src('img/*.gif')
    .pipe(gulp.dest("dist/img"))
    done();
})
//复制js文件
gulp.task('copyjs',done =>{
    return gulp.src('js/*.js')
    .pipe(gulp.dest("dist/js"))
    done();
})
//复制图标文件
gulp.task('copyicon',done =>{
    return gulp.src('download/**/*')
    .pipe(gulp.dest("dist/download"))
    done();
})

gulp.task("build", gulp.parallel("html", "sass"));

gulp.task("default", gulp.series("build", "server", "watch"));