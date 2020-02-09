jQuery(document).ready(function($) {
    var index_slider=$('.box-slider .active').index('.box-slider  .slider-img ')+1;
    $('.button-right ').click(function(event) {
    	if (index_slider==$('.box-slider  .slider-img').length){
        	index_slider=1;
        }else index_slider++;
        $('.box-slider  .slider-img.active').removeClass('active');
        $('.box-slider  .slider-img:nth-child('+index_slider+')').addClass('active SlideLeftIn').one('webkitAnimationEnd', function(event) {
        	$('.box-slider  .slider-img').removeClass('SlideLeftIn');
        });
        $('.box-slider  .slider-img:nth-child('+(index_slider-1)+')').addClass('SlideLeftOut').one('webkitAnimationEnd', function(event) {
        	$('.box-slider  .slider-img').removeClass('SlideLeftOut');
        });
     });
    $('.button-left').click(function(event) {	
    	 if (index_slider==1){
        	index_slider=$('.box-slider .slider-img').length;
        }else  index_slider--;
        $('.box-slider  .slider-img').removeClass('active');
        $('.box-slider  .slider-img:nth-child('+index_slider+')').addClass('active SlideRightIn').one('webkitAnimationEnd', function(event) {
        	$('.box-slider  .slider-img').removeClass('SlideRightIn');
        }); 
        $('.box-slider  .slider-img:nth-child('+(index_slider+1)+')').addClass('SlideRightOut').one('webkitAnimationEnd', function(event) {
        	$('.box-slider  .slider-img').removeClass('SlideRightOut');
        }); 
     });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
});
