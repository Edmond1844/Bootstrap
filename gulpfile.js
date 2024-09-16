import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';
import { deleteAsync } from 'del';

export const style = () => {
    return gulp.src('source/less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('source/css'));
};

export const save = () => {
    return gulp.src([
        'source/css/**/*',
        'source/*.html',
        'source/js/**/*'
    ], {
        base: 'source'
    })
    .pipe(gulp.dest('dist'));
};

export const clean = () => {
    return deleteAsync(['dist']);
};

export default gulp.series(
    clean,
    style,
    save
);

