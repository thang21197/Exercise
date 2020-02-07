jQuery(document).ready(function($) {
	    var current_slider;
	    console.log($('.box-slider .slider-img').length);
        $('.button-right').click(function(event) {
        current_slider=$('.box-slider .slider-img.active');
        $('.box-slider .slider-img.active').removeClass('active');
    	current_slider.next().addClass('active');
        if (current_slider==$('.box-slider .slider-img').length()){
        	current_slider=0;
        }
     });
});
