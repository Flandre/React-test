module.exports = function (grunt) {
  'use strict';
  // Force use of Unix newlines
  grunt.util.linefeed = '\n';
  // Set default file encoding utf-8.
  grunt.file.defaultEncoding = 'utf-8';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      react: {
        src: 'node_modules/react/dist/react.min.js',
        dest: 'lib/react.min.js'
      },
      react_dom: {
        src: 'node_modules/react-dom/dist/react-dom.min.js',
        dest: 'lib/react-dom.min.js'
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.',
          keepalive: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['copy', 'connect']);
};