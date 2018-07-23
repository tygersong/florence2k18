$(document).ready(function() {

// 	window.onbeforeunload = function(){window.scrollTo(8640,3120); }
// 	// x-coord, y-coord


// 	$('#el').on({
//     	'mousewheel': function(e) {
//     	    e.preventDefault();
//     	    e.stopPropagation();
// 		}
// 	})

// $(".top").on("mouseenter", function() {
// 		$(".topTriangle").hide();

// });
// $(".top").on("mouseleave", function() {
// 		$(".topTriangle").show();
// });

// $(".left").on("mouseenter", function() {
// 		$(".leftTriangle").hide();
// });
// $(".left").on("mouseleave", function() {
// 		$(".leftTriangle").show();
// });

// $(".right").on("mouseenter", function() {
// 		$(".rightTriangle").hide();
// });
// $(".right").on("mouseleave", function() {
// 		$(".rightTriangle").show();
// });

// $(".bottom").on("mouseenter", function() {
// 		$(".bottomTriangle").hide();
// });
// $(".bottom").on("mouseleave", function() {
// 		$(".bottomTriangle").show();
// });






// 	var X = 8640;
// 	var Y = 3120;

// $('.top').on("click", function () {
// 	if ( Y > 0) {
// 		$(".bottom").show();
// 		$("html, body").animate({scrollTop: Y - 780 + 'px'});
// 		Y = Y - 780;

// 		//column 1 & 9 & 10
// 		if (X == 0 || X == 11520 || X == 12960) {
// 			if (Y == 2340) {
// 				$(".top").hide();
// 			}
// 		}

// 		//column 2 & 3 & 8
// 		if (X == 1440 || X == 2880 || X == 10080) {
// 			if (Y == 1560) {
// 				$(".top").hide();
// 			}
// 		}

// 		//column 5 & 6
// 		if (X == 5760 || X == 7200) {
// 			if ( Y == 0) {
// 				$(".top").hide();
// 			}
// 		}

// 		//column 4 & 7
// 		if (X == 4320 || X == 8640) {
// 			if ( Y == 780) {
// 				$(".top").hide();
// 			}
// 		}

// 		$(".left").show();
// 		$(".right").show();

// 		//copy paste below into bottom for LEFT controls
// 		//row 1 & 8 & 9
// 		if ((Y == 0 || Y == 5460 || Y == 6240) && X == 5760) {
// 			$(".left").hide();
// 		}

// 		//row 2
// 		if ((Y == 780) && X == 4320) {
// 			$(".left").hide();
// 		}

// 		//row 3
// 		if ((Y == 1560) && X == 780) {
// 			$(".left").hide();
// 		}

// 		//row 4 & 5 & 6
// 		if ((Y == 2340 || Y == 3120 || Y == 3900) && X == 0) {
// 			$(".left").hide();
// 		}

// 		//row 7
// 		if ((Y == 4680) && X == 2880) {
// 			$(".left").hide();
// 		}

// 		//row 10
// 		if ((Y == 7020) && X == 8640) {
// 			$(".left").hide();
// 		}



// 		//copy paste below into bottom for RIGHT controls
// 		//row 1
// 		if ((Y == 0) && X == 7200) {
// 			$(".right").hide();
// 		}

// 		//row 2
// 		if ((Y == 780) && X == 8640) {
// 			$(".right").hide();
// 		}

// 		//row 3
// 		if ((Y == 1560) && X == 10080) {
// 			$(".right").hide();
// 		}

// 		//row 4 & 5 & 6 & 7 & 8 & 9 & 10
// 		if ((Y == 2340 || Y == 3120 || Y == 3900 || Y == 4680 || Y == 5460 || Y == 6240 || Y == 7020) && X == 12960) {
// 			$(".right").hide();
// 		}









// 	}
// })


// $('.bottom').on("click", function () {
// 	if ( Y >= 0) {
// 			$(".top").show();
// 		$("html, body").animate({scrollTop: Y + 780 + 'px'});
// 		Y = Y + 780;
// 		if ( Y == 7020) {
// 			$(".bottom").hide();
// 		}

// 		//column 1 & 2
// 		if (X == 0 || X == 1440) {
// 			if ( Y == 3900) {
// 				$(".bottom").hide();
// 			}
// 		}

// 		//column 3 & 4
// 		if (X == 2880 || X == 4320) {
// 			if ( Y == 4680) {
// 				$(".bottom").hide();
// 			}
// 		}

// 		//column 5 & 6
// 		if (X == 5760 || X == 7200) {
// 			if ( Y == 6240) {
// 				$(".bottom").hide();
// 			}
// 		}

// 		//column 7 & 8 & 9 & 10
// 		if (X == 8640 || X == 10080 || X == 11520 || X == 12960) {
// 			if ( Y == 7020) {
// 				$(".bottom").hide();
// 			}
// 		}

// 		$(".left").show();
// 		$(".right").show();

// 		//LEFT CONTROLS
// 		//row 1 & 8 & 9
// 		if ((Y == 0 || Y == 5460 || Y == 6240) && X == 5760) {
// 			$(".left").hide();
// 		}

// 		//row 2
// 		if ((Y == 780) && X == 4320) {
// 			$(".left").hide();
// 		}

// 		//row 3
// 		if ((Y == 1560) && X == 780) {
// 			$(".left").hide();
// 		}

// 		//row 4 & 5 & 6
// 		if ((Y == 2340 || Y == 3120 || Y == 3900) && X == 0) {
// 			$(".left").hide();
// 		}

// 		//row 7
// 		if ((Y == 4680) && X == 2880) {
// 			$(".left").hide();
// 		}

// 		//row 10
// 		if ((Y == 7020) && X == 8640) {
// 			$(".left").hide();
// 		}

// 		//RIGHT CONTROLS
// 		//row 1
// 		if ((Y == 0) && X == 7200) {
// 			$(".right").hide();
// 		}

// 		//row 2
// 		if ((Y == 780) && X == 8640) {
// 			$(".right").hide();
// 		}

// 		//row 3
// 		if ((Y == 1560) && X == 10080) {
// 			$(".right").hide();
// 		}

// 		//row 4 & 5 & 6 & 7 & 8 & 9 & 10
// 		if ((Y == 2340 || Y == 3120 || Y == 3900 || Y == 4680 || Y == 5460 || Y == 6240 || Y == 7020) && X == 12960) {
// 			$(".right").hide();
// 		}
// 	}
// })


// $('.left').on("click", function () {
// 	if ( X > 0) {
// 		$(".right").show();
// 		$("html, body").animate({scrollLeft: X - 1440 + 'px'});
// 		X = X - 1440;
// 		if ( X == 0) {
// 			$(".left").hide();
// 		}
// 		$(".top").show();
// 		$(".bottom").show();

// 		//row 1 & 8 & 9
// 		if (Y == 0 || Y == 5460 || Y == 6240) {
// 			if (X == 5760) {
// 				$(".left").hide();
// 			}
// 		}

// 		//row 2
// 		if (Y == 780) {
// 			if (X == 4320) {
// 				$(".left").hide();
// 			}
// 		}

// 		//row 3
// 		if (Y == 1560) {
// 			if (X == 780) {
// 				$(".left").hide();
// 			}
// 		}

// 		//row 4 & 5 & 6
// 		if (Y == 2340 || Y == 3120 || Y == 3900) {
// 			if (X == 0) {
// 				$(".left").hide();
// 			}
// 		}

// 		//row 7
// 		if (Y == 4680) {
// 			if (X == 2880) {
// 				$(".left").hide();
// 			}
// 		}

// 		//row 10
// 		if (Y == 7020) {
// 			if (X == 8640) {
// 				$(".left").hide();
// 			}
// 		}


// 		//copy paste below into right for TOP controls
// 		//column 1 & 9 & 10
// 		if ((X == 0 || X == 11520 || X == 12960) && Y == 2340) {
// 			$(".top").hide();
// 		}

// 		//column 2 & 3 & 8
// 		if ((X == 1440 || X == 2880 || X == 10080) && Y == 1560) {
// 			$(".top").hide();
// 		}

// 		//column 5 & 6
// 		if ((X == 5760 || X == 7200) && Y == 0) {
// 			$(".top").hide();
// 		}

// 		//column 4 & 7
// 		if ((X == 4320 || X == 8640) && Y == 780) {
// 			$(".top").hide();
// 		}

// 		//copy paste below into right for BOTTOM controls
// 		//column 1 & 2
// 		if ((X == 0 || X == 1440) && Y == 3900) {
// 			$(".bottom").hide();
// 		}

// 		//column 3 & 4
// 		if ((X == 2880 || X == 4320) && Y == 4680) {
// 			$(".bottom").hide();
// 		}

// 		//column 5 & 6
// 		if ((X == 5760 || X == 7200) && Y == 6240) {
// 			$(".bottom").hide();
// 		}

// 		//column 7 & 8 & 9 & 10
// 		if ((X == 8640 || X == 10080 || X == 11520 || X == 12960) && Y == 7020) {
// 			$(".bottom").hide();
// 		}

// 	}
// })


// $('.right').on("click", function () {
// 	if ( X >= 0) {
// 		$(".left").show();
// 		$("html, body").animate({scrollLeft: X + 1440 + 'px'});
// 		X = X + 1440;
// 		if ( X == 12960) {
// 			$(".right").hide();
// 		}
// 		$(".show").hide();

// 		$(".top").show();
// 		$(".bottom").show();

// 		//row 1
// 		if (Y == 0) {
// 			if (X == 7200) {
// 				$(".right").hide();
// 			}
// 		}

// 		//row 2
// 		if (Y == 780) {
// 			if (X == 8640) {
// 				$(".right").hide();
// 			}
// 		}

// 		//row 3
// 		if (Y == 1560) {
// 			if (X == 10080) {
// 				$(".right").hide();
// 			}
// 		}

// 		//row 4 & 5 & 6 & 7 & 8 & 9 & 10
// 		if (Y == 2340 || Y == 3120 || Y == 3900 || Y == 4680 || Y == 5460 || Y == 6240 || Y == 7020) {
// 			if (X == 12960) {
// 				$(".right").hide();
// 			}
// 		}

// 		//TOP CONTROLS
// 		//column 1 & 9 & 10
// 		if ((X == 0 || X == 11520 || X == 12960) && Y == 2340) {
// 			$(".top").hide();
// 		}

// 		//column 2 & 3 & 8
// 		if ((X == 1440 || X == 2880 || X == 10080) && Y == 1560) {
// 			$(".top").hide();
// 		}

// 		//column 5 & 6
// 		if ((X == 5760 || X == 7200) && Y == 0) {
// 			$(".top").hide();
// 		}

// 		//column 4 & 7
// 		if ((X == 4320 || X == 8640) && Y == 780) {
// 			$(".top").hide();
// 		}

// 		//BOTTOM CONTROLS
// 		//column 1 & 2
// 		if ((X == 0 || X == 1440) && Y == 3900) {
// 			$(".bottom").hide();
// 		}

// 		//column 3 & 4
// 		if ((X == 2880 || X == 4320) && Y == 4680) {
// 			$(".bottom").hide();
// 		}

// 		//column 5 & 6
// 		if ((X == 5760 || X == 7200) && Y == 6240) {
// 			$(".bottom").hide();
// 		}

// 		//column 7 & 8 & 9 & 10
// 		if ((X == 8640 || X == 10080 || X == 11520 || X == 12960) && Y == 7020) {
// 			$(".bottom").hide();
// 		}
// 	}
// })










$('.home').on("click", function () {
	$("html, body").animate({scrollTop: 3120});
	$("html, body").animate({scrollLeft: 8640});
	X = 8640;
	Y = 3120;
})

$('.info').click(function(){
	$(".infoPage").fadeIn(800);
})

$('.infoX').click(function(){
	$(".infoPage").fadeOut(800);
	window.scrollTo(X, Y);
})


$('.zoomOut').on("click", function () {
	$(".cover").show().delay(2000).fadeOut();
	$('.container').addClass('animate');

	$(".top").hide();
	$(".left").hide();
	$(".right").hide();
	$(".bottom").hide();
	$(".home").hide();
	$(".info").hide();
	$(".infoPage").hide();
	$(".zoomOut").hide();
	$(".zoomIn").show();
	$(".eyeCon").css('left', X/10 + 12 + 'px');
	$(".eyeCon").css('top', Y/10 + 'px');
	$(".eyeCon").show();
	$(".coverClick").show();
})

$('.zoomIn').on("click", function () {
	$(".cover").show().delay(2000).fadeOut();
	$(".cover").hide();
	$('.container').removeClass('animate');
	$("html, body").scrollTop(Y);
	$("html, body").scrollLeft(X);
	$(".top").show();
	$(".left").show();
	$(".right").show();
	$(".bottom").show();
	$(".home").show();
	$(".info").show();
	$(".zoomIn").hide();
	$(".zoomOut").show();
	$(".eyeCon").hide();
	$(".coverClick").hide();
})











$('.icon1').click(function(){
	$(".top").hide();
	$(".left").hide();
	$(".right").hide();
	$(".bottom").hide();
	$(".home").hide();
	$(".info").hide();
	$(".infoPage").hide();
	$(".zoomOut").hide();
	$(".zoomIn").hide();
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
	var html = jQuery('html');
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
})


$('.xOut').click(function(){
    $(".setting1").animate({
		top: '50%',
		left: '50%',
		width: '0%',
		height:'0%'
	}, 800);
	$(".insides").fadeOut("fast");

	var html = jQuery('html');
	var scrollPosition = html.data('scroll-position');
	html.css('overflow', html.data('previous-overflow'));
	window.scrollTo(scrollPosition[0], scrollPosition[1])

	window.scrollTo(X, Y);

	$(".top").show();
	$(".left").show();
	$(".right").show();
	$(".bottom").show();
	$(".home").show();
	$(".info").show();
	$(".zoomOut").show();
	$(".zoomIn").show();
})


$('.image1').scroll(function () {
    $('.opacityScroller').scrollTop($(this).scrollTop());
});


$('.setting1').mousemove(function(e){
	var amountMovedX = (e.clientX * -1 / 35);
	var amountMovedY = (e.clientY * -1 / 50);
    $(".image1").css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});











$('.icon2').click(function(){
	$(".top").hide();
	$(".left").hide();
	$(".right").hide();
	$(".bottom").hide();
	$(".home").hide();
	$(".info").hide();
	$(".infoPage").hide();
	$(".zoomOut").hide();
	$(".zoomIn").hide();
    $(".setting2").animate({
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
	var html = jQuery('html');
	html.data('scroll-position', scrollPosition);
	html.data('previous-overflow', html.css('overflow'));
	html.css('overflow', 'hidden');
	window.scrollTo(scrollPosition[0], scrollPosition[1]);
})


$('.image2').scroll(function () {
    $('.opacityScroller').scrollTop($(this).scrollTop());
});


$('.setting2').mousemove(function(e){
	var amountMovedX = (e.clientX * -1 / 25);
	var amountMovedY = (e.clientY * -1 / 70);
    $(".image2").css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});







});
