module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['scripts/_source/*.js'],
        dest: 'scripts/all.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'js/all.js': ['js/all.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['scripts/_source/*.js'],
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
