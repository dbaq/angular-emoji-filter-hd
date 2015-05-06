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
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        "lib/*.png"
                    ],
                    dest: "dist/"
                }, {
                    expand: true,
                    flatten: true,
                    src: [
                        "lib/scss/*"
                    ],
                    dest: "dist/"
                }]
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
        sass: {
            dist: {
                options: {
                    style: "compact",
                    sourcemap: "none"
                },
                files: {
                    "lib/emoji.css": "lib/scss/emoji.scss"
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
        replace: { //replace $ by @ for variables in the less file (generated from the sass file)
            dist: {
                options: {
                    prefix: "",
                    patterns: [{
                        match: "$emoji-images-path",
                        replacement: "@emoji-images-path"
                    }, {
                        match: " !default;",
                        replacement: ";"
                    }]
                },
                files: [{
                    src: ["lib/scss/emoji.scss"],
                    dest: "dist/emoji.less"
                }]
            }
        },
        compress: {
            dist: {
                options: {
                    archive: "dist/angular-emoji-hd.zip"
                },
                files: [{
                    src: [
                        "dist/*.js",
                        "dist/*.css",
                        "dist/*.png",
                        "dist/*.scss",
                        "dist/*.less",
                        "LICENSE",
                        "bower.json"
                    ]
                }]
            }
        }
    });

    grunt.registerTask("default", [
        "jshint",
        "clean:all",
        "uglify",
        "sass",
        "cssmin",
        "copy",
        "replace",
        "compress"
    ]);

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-compress");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-replace");

};