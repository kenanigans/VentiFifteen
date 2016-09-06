module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
			sass: {
			  dev: {
			    options: {
			      style: 'compressed',
			    },
			    files: {										// Dictionary of files
			      'style.css': 'sass/style.scss'				// 'destination': 'source'
			    }
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

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}