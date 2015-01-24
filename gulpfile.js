var REQUIRED_LIBS = [
    'craftyjs'
];

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var config = require('./constants'),
    paths = config.paths,
    server = config.server,
    dev = config.dev;

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
            .pipe(gulp.dest(paths.dist.JS))
            .pipe(reload({stream: true}));
        console.log('rebundled.');
    });
    return bundleAppToDest(watcher);
});
gulp.task('browsersync', function() {
    browserSync({
        proxy: server.HOST + ':' + server.PORT,
        port: dev.BROWSERSYNC_PORT
    });
});
// Reload all Browsers
gulp.task('bs-reload', function () {
    reload();
});


gulp.task('dev',
    [
        'watch-bundle-app-js',
        'browsersync'
    ]
);

// Default task, is what the deployed version (ggj15.nulo.com.br) runs
gulp.task('default',
    [
        'html',
        'bundle-vendors-js',
        'bundle-app-js'
    ]
);
