module.exports = {
    build: {
        files: [{
            expand: true,
            flatten: true,
            filter: 'isFile',
            dest: '<%= paths.demo %>/js/',
            src: ['<%= paths.build %>/**']
        }]
    }
};
