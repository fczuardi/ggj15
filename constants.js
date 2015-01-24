var Constants = {
    paths: {
        TEMPLATES: './src/templates/',
        SCRIPTS: './src/js/',
        MAIN_JS_ENTRY: './src/js/main.js',
        dist: {
            WWW: './dist/www/',
            JS: './dist/www/js/',
            VENDORS_JS_FILENAME: 'vendors.js',
            MAIN_JS_FILENAME: 'main.js'
        }
    },
    server: {
        HOST: 'localhost',
        PORT: 2999
    },
    dev: {
        BROWSERSYNC_PORT: 3000
    }
};

module.exports = Constants;
