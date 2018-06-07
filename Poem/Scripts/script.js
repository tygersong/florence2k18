$(document).ready(function() {
    $('#bg').animate({opacity: 0}, 0);

    $('#bg').css({'background-image': "url('https://simonjamesonweston.files.wordpress.com/2012/01/r1-13.jpg')"});
    $('#bg').animate({opacity: 1}, 8000);


$(".tyger").delay(2000)
.css('left', function(){ return $(this).offset().left; })

			.animate({"left":"50px"}, 2000);  
});
