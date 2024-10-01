module.exports = function(grunt) {

grunt.initConfig({
    less: {
    development: {
        files: {
        "dist/styles/main.css": "src/styles/main.less"
        }
    }
    },
    uglify: {
    build: {
        files: {
        'dist/scripts/main.min.js': ['src/scripts/main.js']
        }
    }
    }

});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['less', 'uglify']);
grunt.registerTask('build', ['less', 'uglify']);
};