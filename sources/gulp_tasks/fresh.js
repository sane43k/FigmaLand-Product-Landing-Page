import gulp from "gulp";
import replace from "gulp-replace";
import clean from "gulp-clean";
import debug from "gulp-debug";
import inquirer from "inquirer";

function runConditionFresh() {
  if ($.isUseTailwind) {
    gulp.src("./src/pug/blocks/_main.pug")
      .pipe(replace("main.main", "main.main.grow"))
      .pipe(gulp.dest("./src/pug/blocks/"))
      .pipe(debug({"title": "Fresh main block PUG"}));
    gulp.src("./src/sass/main.sass")
      .pipe(replace(/^.*(blocks|test).*$/gm, ""))
      .pipe(replace("\/\/@", "@"))
      //.pipe(replace(/^.*blocks.*$/gm, ""))
      .pipe(gulp.dest("./src/sass/"))
      .pipe(debug({"title": "Fresh main.sass"}));
  }
  if (!$.isUseTailwind) {
    gulp.src("./src/sass/main.sass")
      .pipe(replace(/^.*test.*$/gm, ""))
      .pipe(gulp.dest("./src/sass/"))
      .pipe(debug({ title: "Fresh main.sass" }));
  }
}
const removedRequiredFiles = [
  "./src/sass/blocks/index-test-block.sass",
  "./src/fonts/test.woff",
  "./src/html_direct_copying/test_folder",
  "./src/images/skip-optimization/skipped-optim.png",
  "./src/images/skip-optimization/skipped-optim.svg",
  "./src/images/sprite-svg/clock.svg",
  "./src/images/sprite-svg/money-hover.svg",
  "./src/images/sprite-svg/money.svg",
  "./src/images/sprite-svg/personal-hover.svg",
  "./src/images/sprite-svg/personal.svg",
  "./src/images/sprite-svg/phone-rounded.svg",
  "./src/images/sprite-svg/programmer.svg",
  "./src/images/sk-setmenu.webp",
  "./src/images/about.jpg",
  "./src/images/about@2x.jpg",
  "./src/images/games-bg.png",
  "./src/images/optim.png",
  "./src/images/optim.svg",
  "./src/js/test.json",
  "./src/pug/blocks/index-test-block.pug",
  "./src/pug/sub-folder/sub-page.pug",
  "./src/pug/sub-folder",
  "./src/sass/blocks/index-test-block.sass",
  "./src/js/_test-module.js",
  "./src/js/_test-nested.js",
];
const removedOptionalFiles = [
  "./src/sass/blocks/_footer.sass",
  "./src/sass/blocks/_header.sass",
  "./src/sass/blocks/_main.sass",
];
const removedFiles = () => {
  if ($.isUseTailwind) return [...removedRequiredFiles, ...removedOptionalFiles];
  if (!$.isUseTailwind) return removedRequiredFiles;
};

gulp.task("fresh", (done) => {
    inquirer
        .prompt([{
            type: 'confirm',
            name: 'gulp fresh',
            message: `Are you sure you want to launch gulp fresh? This task will bring the file structure into a standard form`,
            default: false,
        }])
        .then((answers) => {
            if (answers['gulp fresh']) {
                gulp.src("./src/pug/index.pug")
                    .pipe(replace(/^.*test.*$/gm, ""))
                    .pipe(gulp.dest("./src/pug/"))
                    .pipe(debug({"title": "Fresh index.pug"}));
                gulp.src("./src/sass/base/_sprite_generated.scss")
                    .pipe(replace(/.*/gm, ""))
                    .pipe(gulp.dest("./src/sass/base/"))
                    .pipe(debug({"title": "Fresh _sprite_generated.sass"}));
                gulp.src("./src/js/main.js")
                    .pipe(replace(/^.*(console|fun\(|^fun|let|const|return|import|testModule|\/\/ Let|\}$).*$\n/gm, ""))
                    .pipe(gulp.dest("./src/js/"))
                    .pipe(debug({"title": "Fresh main.js"}));
                runConditionFresh();
                done(null,gulp.src(removedFiles(), {read: false, allowEmpty: true})
                .pipe(clean())
                .pipe(debug({"title": "Removed"})))
            } else {
                done(null, false)
            }
        })
});
