module.exports = function (grunt) {
    return {
	html: {
            files: ['src/index/*.html'],
            tasks: ['copy:all']
	},
        css: {
            files: ['src/sass/*.scss'],
            tasks: ['stylelint', 'css']
        },
        options: {
            spawn        : false,
            interrupt    : true,
            debounceDelay: 250,
            livereload: {
                key : grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.key'),
                cert: grunt.file.read('node_modules/grunt-contrib-connect/tasks/certs/server.crt')
            },
        }
    };
};
