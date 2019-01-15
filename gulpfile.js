var gulp = require('gulp'),
    gutil = require('gulp-util'),
    package = require('./package.json');


    gulp.task( 'default', function(){
    	console.log();
    	console.log("====================");

    	console.log("Welcome To Gulp-Test");
    	console.log("====================");
    	console.log("v" + package.version);
    	console.log();
    	
    });