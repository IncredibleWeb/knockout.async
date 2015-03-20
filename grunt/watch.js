module.exports = {
    dev: {
        files: ['<%= paths.src %>/**/*.js'],
        tasks: ['jshint'],
        options: {
            livereload: true
        }
    },
    build: {
        files: ['<%= paths.src %>/**/*.js'],
        tasks: ['uglify', 'copy:build'],
        options: {
            livereload: true
        }
    }
};
