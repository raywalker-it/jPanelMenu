module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {// https://www.npmjs.org/package/grunt-contrib-jshint
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    Modernizr: true,
                    console: true
                }
            },
            files: ['jquery.<%= pkg.name %>.js', 'jquery.<%= pkg.name %>-transform.js']
        },
        uglify: {
            options: {
                banner: '/** <%= pkg.name %> - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> - <%= pkg.license %>*/\n'
            },
            build: {
                src: 'jquery.<%= pkg.name %>.js',
                dest: 'jquery.<%= pkg.name %>.min.js'
            },
            cssBuild: {
                src: 'jquery.<%= pkg.name %>-transform.js',
                dest: 'jquery.<%= pkg.name %>-transform.min.js'
            }
        },
        watch: {
            options: {
                spawn: false,
                reporter: require('jshint-stylish')
            },
            target: {
                files: ['jquery.<%= pkg.name %>.js', 'jquery.<%= pkg.name %>-transform.js'],
                tasks: ['javascript']

            }
        }
    });

    // Javascript code quality assurance
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Javascript code quality assurance
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);

    grunt.registerTask('javascript', ['jshint', 'uglify']);

};