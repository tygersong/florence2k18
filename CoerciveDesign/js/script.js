$(document).ready(function() {

	window.onbeforeunload = function() {window.scrollTo(0,0);}

	var windw = this;

	$.fn.followTo = function ( elem ) {
		var $this = this,
		$window = $(windw),
		$bumper = $(elem),
		bumperPos = $bumper.offset().top+330,
		thisHeight = $this.outerHeight(),
		setPosition = function(){
			if ($window.scrollTop() > (bumperPos - thisHeight)) {
				$this.css({
					position: 'absolute',
					top: (bumperPos - thisHeight)
				});
			} else {
				$this.css({
					position: 'fixed',
					top: 0
				});
			}
		};
		$window.resize(function()
		{
			bumperPos = pos.offset().top;
			thisHeight = $this.outerHeight();
			setPosition();
		});
		$window.scroll(setPosition);
		setPosition();
	};

	

	$(window).scroll(function() {
		if ($(document).scrollTop() < 900 || $(document).scrollTop() == 0 ) {
			$(".white").css('z-index' , '5');
			$("#whiteCircle, #whiteTriangle, #whiteHexagon, #whiteSquare").css('background-color', "white");
			$("#whiteCircle, #whiteTriangle, #whiteHexagon, #whiteSquare").css('opacity', '1');
		}

		else {
			if ($(document).scrollTop() >= 900) {
				$("#whiteCircle, #whiteTriangle, #whiteHexagon, #whiteSquare").fadeTo(1000, 0);
				$(".splash").css('opacity', '0');

				if ($(document).scrollTop() > 1200) {
					$(".white").css('z-index' , '-10');
					$(window).off("scroll");
				}
			}
		}
	});




	$('#one').followTo('.two');

});
