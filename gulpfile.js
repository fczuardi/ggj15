var paths = {
    TEMPLATES: './src/templates/',
    dist: {
        WWW: './dist/www/'
    }
};

var gulp = require('gulp');

gulp.task('html', function(){
     return gulp.src(paths.TEMPLATES + '*.html')
    .pipe(gulp.dest(paths.dist.WWW));
});

// Default task, is what the deployed version (ggj15.nulo.com.br) runs
gulp.task('default',
        [
            'html'
        ]
);
