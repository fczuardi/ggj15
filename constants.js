var w = 768,
    h = 960;
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
    },
    game: {
        WIDTH: w,
        HEIGHT: h,
        BG_WIDTH: 4000,
        BG_HEIGHT: 480,
        FLOOR_WIDTH: w,
        PORTAL_WIDTH: w,
        GRAVITY: 0.4,
        BALLOON_GRAVITY: - 0.05,
        FLOOR_HEIGHT: 50,
        PORTAL_HEIGHT: 50
    }
};

module.exports = Constants;
