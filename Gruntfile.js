module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {
                camelcase: true,
                immed: true,
                quotmark: "double",
                strict: true,
                trailing: true,
                undef: true,
                white: true
            },
            browser: {
                options: {
                    browser: true,
                    es3: true,
                    globals: {
                        angular: true
                    }
                },
                files: {
                    src: [
                        "lib/*.js"
                    ]
                }
            },
            node: {
                options: {
                    node: true
                },
                files: {
                    src: [
                        "Gruntfile.js",
                        "package.json",
                        "component.json"
                    ]
                }
            }
        },
        clean: {
            all: [
                "dist"
            ]
        },
        copy: {
            max: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            "lib/*.png"
                        ],
                        dest: "dist/"
                    }
                ]
            }
        },
        uglify: {
            browser: {
                files: {
                    "dist/emoji.min.js": [
                        "lib/emoji.js"
                    ]
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: "lib/",
                src: [
                    "*.css"
                ],
                dest: "dist/",
                ext: ".min.css"
            }
        },
        compress: {
            dist: {
                options: {
                    archive: "dist/angular-emoji-HD.zip"
                },
                files: [
                    {
                        src: [
                            "dist/*.js",
                            "dist/*.css",
                            "dist/*.png",
                            "LICENSE",
                            "bower.json"
                        ]
                    }
                ]
            }
        }
    });

    grunt.registerTask("default", [
        "jshint",
        "clean:all",
        "uglify",
        "cssmin",
        "copy",
        "compress"
    ]);

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-compress");

};