import gulp from "gulp";
import {path} from "./gulp/config/path.js";

//import plagins
import {plugins} from "./gulp/config/plagins.js"

//import tasks
import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js";
import {js} from "./gulp/tasks/js.js";
import {images} from "./gulp/tasks/images.js";
import {otfToTtf, ttfToWoff, fontsStyle} from "./gulp/tasks/fonts.js";
import {svgSprite} from "./gulp/tasks/svgSprite.js"
import {zip} from "./gulp/tasks/zip.js"

import gulp_gh_pages from "gulp-gh-pages";

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(gulp_gh_pages());
});



global.app = {
    isBuild: process.argv.includes("--build"),
    isDev: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins,
}

//функцияя наблюдения
function Watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

export {svgSprite}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

//параллельные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images));
// const brouserTasks = 

//сценарий запуска
const dev = gulp.series(reset, mainTasks, gulp.parallel(Watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);


export {dev}
export {build}
export {deployZip}

gulp.task("default", dev);