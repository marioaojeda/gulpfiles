module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var server = './src/server/';
    var tmp = './.tmp/';

    var config = {
        /**
         * Optimized files
         */

        optimized: {
            lib: 'lib.js',
            app: 'app.js'
        },

        /**
         * File paths
         */

        index: client + 'index.html',

        client: client,

        build: './build/',

        // All js files to run through vet
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        // Injectable js in HTML
        js: [
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],

        css: [
            tmp + 'styles.css'
        ],

        less: client + 'styles/styles.less',

        fonts: './bower_components/font-awesome/fonts/**/*.*',

        html: clientApp + '**/*.html',

        images: client + 'images/**/*.*',

        server: server,

        htmltemplates: clientApp + '**/*.html',

        tmp: tmp,

        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        },

        /**
         * Node settings
         */

        defaultPort: 7203,
        nodeServer: server + 'app.js',

        /**
         * template cache
         */
        templatecache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },

        /**
         * browserSync
         */
        browserReloadDelay: 1000
    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};
