/*
 * grunt-html-components
 * https://github.com/arnogues/grunt-html-components
 *
 * Copyright (c) 2014 Arnaud Gueras
 * Licensed under the MIT license.
 */

'use strict';

var HtmlComponents = require('html-components');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('html_components', 'Grunt task for node module html-components', function () {
        var _this = this;
        // Merge task-specific and/or target-specific options with these defaults.
        this.files.forEach(function(file) {
            var options = _this.options({
                componentsFolder : file.componentsFolder,
                attrNodePrefix:file.attrNodePrefix
            });
            var htmlComponents = new HtmlComponents(options);
            //console.log(htmlComponents.options);
            htmlComponents.processDirectory(file.orig.src, file.cwd, file.dest);
        });

        // Iterate over all specified file groups.
        /*this.files.forEach(function (file) {
         // Concat specified files.

         });*/
    });

};
