$(document).ready(function(){
	// alert('omg');



$('.circle2L ').on('mouseenter', function(){
	$('.c2-1').addClass('hover-2L')
	$('.c2-2').addClass('hover-2R')

});

$('.circle2R ').on('mouseenter', function(){
	$('.c2-1').addClass('hover-2L')
	$('.c2-2').addClass('hover-2R')

});


$('.circle2R ').on('mouseleave', function(){
	$('.c2-1').removeClass('hover-2L')
	$('.c2-2').removeClass('hover-2R')

});

$('.circle2L ').on('mouseleave', function(){
	$('.c2-1').removeClass('hover-2L')
	$('.c2-2').removeClass('hover-2R')

});


$('.letter').on('mouseenter', function(){
	$('.stay').removeClass('white')
	$('.stay').addClass('fade')

});


$('.text7-1').on('mouseenter', function(){
	$('.text7-1').addClass('fade')

});


$('.page').on('mouseenter', function(){
	$('.two').removeClass('twostart')
	$('.two').addClass('twoset')
	$('.three').removeClass('threestart')
	$('.three').addClass('threeset')

});

});// DON'T DELETE AISHAH DO NOT









