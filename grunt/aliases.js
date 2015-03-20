module.exports = function (grunt) {
    grunt.registerTask('dev', ['jshint']);
    grunt.registerTask('dev_watch', ['jshint', 'watch:dev']);
    
    grunt.registerTask('build', ['uglify', 'copy:build']);
    grunt.registerTask('build_watch', ['uglify', 'copy:build', 'watch:build']);
    grunt.registerTask('build_demo', ['uglify', 'copy:build', 'connect:demo:keepalive']);
};