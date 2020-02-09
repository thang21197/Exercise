jQuery(document).ready(function($) {
	$(window).scroll(function(event) {
		var vitri=$(window).scrollTop();
	    if (vitri>0){
	    	$('.trigger').fadeTo(400,0);
	    	$('.header').addClass('slideOutUp');	    	
	    }
	    else{
	    	$('header').removeClass('slideOutUp');
	    }
	});
});