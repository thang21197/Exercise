jQuery(document).ready(function($) {
    var index_slider=$('.box-slider .active').index('.box-slider  .slider-img ')+1;
    auto_slide=setInterval(function(){
     $('.button-right').trigger('click');
    },4000);
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
        // Bullet
        $('.list-bullet li.active').removeClass('active');
        $('.list-bullet li:nth-child('+index_slider+')').addClass('active');
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
        // Bullet
        $('.list-bullet li.active').removeClass('active');
        $('.list-bullet li:nth-child('+index_slider+')').addClass('active');
     });
    // bullet
     $('.list-bullet li a').click(function(event) {
        event.preventDefault();
        index_slider=$(this).index('.list-bullet a')+1;
        $('.box-slider  .slider-img.active').removeClass('active');
        $('.list-bullet li.active').removeClass('active');
        $('.list-bullet li:nth-child('+index_slider+')').addClass('active');
        $('.box-slider  .slider-img:nth-child('+index_slider+')').addClass('active SlideLeftIn').one('webkitAnimationEnd', function(event) {
            $('.box-slider  .slider-img').removeClass('SlideLeftIn');
        });
        $('.box-slider  .slider-img.active').addClass('SlideLeftOut').one('webkitAnimationEnd', function(event) {
            $('.box-slider  .slider-img').removeClass('SlideLeftOut');
        });
     });
});
