module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // plugins
        watch: {
	      less: {
	        files: ['less/*.less'],
	        tasks: ['less', 'cssmin'], // run these tasks
	        options: {
	          livereload: true,
	        }
	      }
	    },

        less: {
	      development: {
	        options: {
	          paths: ['less']
	        },
	        files: {
	          'build/css/site.min.css' : 'less/run.less'
	        }
	      }
	    },

        cssmin: {
	      combine: {
	        files: {
	          // the name of the file, then the css files to be combine
	          'build/css/site.min.css' : ['build/css/site.min.css']
	        }
	      }
	    },


    });

    // Load the plugin that provides the tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);

};