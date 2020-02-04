jQuery(document).ready(function($) {
	$('.accordion-box p').slideUp();
	$('.accordion-box h2').click(function() {
		$('.accordion-box p').css('display','block');
		$('.accordion-box').removeClass('active');
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});
});