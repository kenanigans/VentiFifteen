module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
			sass: {
			  dist: {
			    options: {
			      sourcemap: 'none',
			    },
			    files: [{										// Dictionary of files
			      expand: true,
			      cwd: 'sass',
			      src: ['**/*.scss'],
			      dest: 'css',
			      ext: '.css'
			    }]
			  } // .dev
			}, // .sass

	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: 'sass/*.scss',
				tasks: ['sass']
			}
		},
		autoprefixer: {
	    options: {
	      browsers: ['last 2 versions', 'ie 8', 'ie 9']
	    },
	    your_target: {
	      // Target-specific file lists and/or options go here. 
	    },
	  },
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}