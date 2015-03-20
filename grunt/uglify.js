module.exports = {
    options: {
        sourceMap: true,
        sourceMapIncludeSources: true,
    },
    js: {
        files: {
            '<%= paths.build %>/knockout.async.min.js': ['<%= paths.src %>/*.js']
        }
    }
};
