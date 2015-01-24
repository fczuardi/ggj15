const paths = {
    TEMPLATES: './src/templates/',
    SCRIPTS: './src/js/',
    MAIN_JS_ENTRY: './src/js/main.js',
    dist: {
        WWW: './dist/www/',
        JS: './dist/www/js/',
        VENDORS_JS_FILENAME: 'vendors.js',
        MAIN_JS_FILENAME: 'main.js'
    }
};

const REQUIRED_LIBS = [
    'craftyjs'
];

function onBundleError(e){
    console.log('BUNDLING ERROR!');
    console.log(e.name,e.fileName,'line:', e.lineNumber,'column:', e.column, e.description);
}
function bundleAppToDest(bundler){
    return bundler.bundle()
            .on('error', onBundleError)
            .pipe(source(paths.dist.MAIN_JS_FILENAME))
            .pipe(gulp.dest(paths.dist.JS));
}
var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify');

gulp.task('html', function(){
    return gulp.src(paths.TEMPLATES + '*.html')
                .pipe(gulp.dest(paths.dist.WWW));
});
gulp.task('bundle-vendors-js', function(){
    return browserify()
            .require(REQUIRED_LIBS)
            .bundle()
            .on('error', onBundleError)
            .pipe(source(paths.dist.VENDORS_JS_FILENAME))
            .pipe(gulp.dest(paths.dist.JS));
});
gulp.task('bundle-app-js', function(){
    var options = {
        entries: [paths.MAIN_JS_ENTRY],
        cache: {},
        packageCache: {},
        fullPaths: true
    };
    var bundler = browserify(options).external(REQUIRED_LIBS);
    return bundleAppToDest(bundler);
});

gulp.task('watch-bundle-app-js', function(){
    var options = {
        entries: [paths.MAIN_JS_ENTRY],
        cache: {},
        packageCache: {},
        fullPaths: true
    };
    var watcher = watchify(browserify(options).external(REQUIRED_LIBS));
    watcher.on('update',function(){
        this.bundle()
            .on('error', onBundleError)
            .pipe(source(paths.dist.MAIN_JS_FILENAME))
            .pipe(gulp.dest(paths.dist.JS));
        console.log('rebundled.');
    });
    return bundleAppToDest(watcher);
});


// Default task, is what the deployed version (ggj15.nulo.com.br) runs
gulp.task('default',
        [
            'html',
            'bundle-vendors-js',
            'bundle-app-js'
        ]
);
