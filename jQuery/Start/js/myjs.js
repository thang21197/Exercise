jQuery(document).ready(function($) {
	$('.Our-work .extra-img').slideUp();
	$('.Our-work .btn-dark.btn').click(function(event) {
		event.preventDefault();
		$('.Our-work .extra-img').slideToggle();
		$('html,body').animate({scrollTop:$('.Our-work .extra-img').offset().top});
		TweenMax.staggerFrom($('.extra-img .col-md-6'),0.8,{top:200,opacity:0},0.2);
	});
	$('.btn-close').click(function(event) {
		event.preventDefault();
		$('.menu-side-bar').toggleClass('active');
	});
	$('.btn-toggle-menu').click(function(event) {
		event.preventDefault();
		$('.menu-side-bar').show();
		$('.menu-side-bar').toggleClass('active');
	});
	$('a.home').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:0}, 1000,"easeInOutSine");
	});
	$('a.about').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.text-after-banner').offset().top}, 1000,"easeInOutSine");
	});
	$('a.services').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.service').offset().top}, 1000,"easeInOutSine");
	});
	$('a.portfolio').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.section-2').offset().top}, 1000,"easeInOutSine");
	});
	$('a.contact').click(function(event) {
		event.preventDefault();
		$('html,body').animate({scrollTop:$('.section-map').offset().top}, 1000,"easeInOutSine");
	});
});