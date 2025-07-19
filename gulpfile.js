// variáveis
const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const sass = require('gulp-sass')(require('sass'));

// fim variáveis

// compila sass
function compila_sass() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/css"));
}
// fim compila sass

//comprimindo imagens
function comprime_imagens() {
  return gulp
    .src("./src/imagens/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/imagens"));
}
//
// export padrão
exports.default = gulp.parallel(compila_sass, comprime_imagens);
//fim export

// observando gulp
exports.watch = function () {
  gulp.watch("./src/styles/*scss", gulp.parallel(compila_sass));
};
// fim obsrevação
