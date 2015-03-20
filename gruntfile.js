module.exports = function(grunt) {

    require('load-grunt-config')(grunt, {
        data: {
            init: true,
            paths: {
                src: 'src',
                build: 'dist',
                demo: 'demo',
            }
        }
    });

};
