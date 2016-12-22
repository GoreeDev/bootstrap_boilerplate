"use strict";


module.exports = function(grunt) {

    var config = {};

    config.clean = {
        build : {
            files : [{
                dot : true,
                src : [
                    "css/main.css",
                    "css/404.css"
                ]
            }]
        }
    };

    config.less = {
        development: {
            files: {
                "css/main.css" : "less/__main.less",
                "css/404.css" : "less/__404.less"
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask("pub", ["clean:build", "less:development"]);
};

