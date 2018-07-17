$(document).ready(function() {

	// window.onbeforeunload = function(){ window.scrollTo(6575,4750); }
	// x-coord, y-coord

$('.icon1').click(function(){
    $(".setting1").animate({
		top: '0%',
		left: '0%',
		width: '100%',
		height:'100%'
	}, 800);
	$(".insides").fadeIn(1000);
	$("#moveAround").delay(1500).fadeOut(800);

	window.scrollTo("50vw", "20vh");

	var scrollPosition = [
	self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
	self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
	];
	var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
})




$('.xOut').click(function(){
    $(".setting1").animate({
		top: '50%',
		left: '17%',
		width: '0%',
		height:'0%'
	}, 800);
	$(".insides").fadeOut("fast");

	var html = jQuery('html');
	var scrollPosition = html.data('scroll-position');
	html.css('overflow', html.data('previous-overflow'));
	window.scrollTo(scrollPosition[0], scrollPosition[1])

	window.scrollTo("50vw", "20vh");
})


$('.image1').scroll(function () {
    $('.opacityScroller').scrollTop($(this).scrollTop());
});


});
