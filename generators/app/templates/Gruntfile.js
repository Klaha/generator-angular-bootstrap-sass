module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public',
          hostname: 'localhost',
          open: true
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
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files:
        [ {
          cwd: "public/jade",
          src: "**/*.jade",
          dest: "public/",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    watch: {
      project: {
        files: ['public/js/*.js', 'public/*.html', 'public/css/*.css', 'public/img/*.*'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'public/scss/**/*.scss',
        tasks: ['sass']
      },
      jade: {
        files: 'public/jade/**/*.jade',
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade', 'sass', 'connect', 'watch']);
};