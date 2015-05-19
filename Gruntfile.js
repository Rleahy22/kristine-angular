module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        wiredep: {
            task: {
                src: [
                    'public/index.html',   // .html support...
                ],
            }
        },
        connect: {
            options: {
                keepalive: true,
                port: 8001
            },
            server: {}
        },
        less: {
            ui: {
                files: [{
                    expand: true, // Enable dynamic expansion.
                    cwd: 'public/', // Src matches are relative to this path.
                    src: ['modules/app.less'], // Actual pattern(s) to match.
                    dest: 'public/',
                    ext: '.css', // Dest filepaths will have this extension.
                    extDot: 'last' // Extensions in filenames begin after the first dot
                }]
            }
        }
    });
}