/*eslint-disable no-unused-vars*/
/*global $, document, alert, window*/
/*jshint browser: true, unused: false, no-unused-vars: true*/
/*jslint devel: true, node: true, vars: true*/
"use strict"; // required by jslint

/*
File Name: hamburger-menu.js
Date: 05/28/19
Programmer: Thanh Dinh
*/

$(document).ready(function() {
    
    $(".cross").hide();
    
    $(".menu").hide();
    
    $(".hamburger").show();

    
    $(".hamburger").on("click", function() {
        
        $(".menu").slideToggle();
        
        $(".hamburger").hide();
        
        $(".cross").show();
        
    });
    
    $(".cross").on("click", function() {
        
        $(".menu").slideToggle();
        
        $(".hamburger").show();
        
        $(".cross").hide();
        
    });
    
});