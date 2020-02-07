jQuery(document).ready(function($) {
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
		$(window).animate({scrollTop:0}, 1000);
	});
});