// const gulp = require('gulp');

// const save = (done) => {
//     gulp.src([
//         'source/less/**/*',
//         'source/page.html'
//     ], {
//         base: 'source'
//     })
//         .pipe(gulp.dest('dist'));
//     done();
// };


// exports.save = save


import gulp from 'gulp';
import {deleteAsync} from 'del';

export const save = () => {
    return gulp.src([
        'source/less/**/*',
        'source/*.html'
    ], {
        base: 'source'
    })
        .pipe(gulp.dest('dist'));
};

export const clean = () => {
    return deleteAsync(['dist']);
};

export default gulp.series(
    clean, save
);
