$(function() {
    'use strict';
    //adjust slider height \
    var winH= $(window).height(),
        upperH=$('.upper-bar').innerheight(),
        navbarH=$('.navbar'). innerheight();

    $('.slider, .carousel-item').height(winH- (upperH+ navbarH))  ; 

});