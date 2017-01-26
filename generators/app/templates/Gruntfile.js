module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public/'
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/style.css' : 'public/scss/style.scss'
        }
      }
    },
    watch: {
      project: {
        files: ['public/js/*.js', 'public/*.html', 'public/css/*.css'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'public/scss/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'watch']);
};
