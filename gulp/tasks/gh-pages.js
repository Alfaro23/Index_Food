import gulp from "gulp";
import gulp_gh_pages from "gulp-gh-pages";

export const GhPages = () => {
    return gulp.src('./dist/**/*')
    .pipe(gulp_gh_pages());
    // return app.gulp.dest("../../dist/**/*")
    //     .pipe(gulp_gh_pages())
}