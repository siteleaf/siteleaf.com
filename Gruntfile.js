module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['_src/*.js'],
        dest: 'js/main.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'js/main.js': ['js/main.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['_src/*.js'],
        tasks: ['concat'],
        options: {
          livereload: true,
        },
      },
    },
  });

  // Load plugins.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks.
  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('dev', ['concat', 'watch']);

};
