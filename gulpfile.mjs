//imports

import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import GulpUglify from 'gulp-uglify';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
//fim imports

//compila sass
const compila_sass = () => {
    return gulp
        .src("./src/styles/*.scss")
        .pipe(gulpSass(sass)({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/styles/"));
};
//fim compila sass

// comprime imagens
const comprime_imagens = () => {
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin([
            gifsicle({optimizationLevel: true}),
            mozjpeg({quality: 75, progressive: true}),
            optipng({optimizationLevel: 5}),
            svgo({plugins:[{name:'removeViewBox', active:true}, {name:'cleanupIds',active:true}]})
        ]))
        .pipe(gulp.dest('./dist/imagem_min'));
};

// comprime js
const comprime_js = ()=>{
    return gulp.src('./src/scripts/*.js')
        .pipe(GulpUglify())
        .pipe(gulp.dest('./dist/script_min/'))
}

//fim comprime js

//fim comprime imagens
// exports padrão
export default gulp.parallel(comprime_imagens, compila_sass, comprime_js);
// fim 
// observando
export const watch = () => {
    gulp.watch('./src/styles/*.scss', gulp.parallel(compila_sass));
    gulp.watch('./src/scripts/*.js', gulp.parallel(comprime_js));
};
// fim observando