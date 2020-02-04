jQuery(document).ready(function($) {
	$('.tdkhoi').next().slideUp();
	$('.tdkhoi').click(function() {
		$(this).toggleClass('xanh');
		$(this).next().slideToggle(900,"easeInOutExpo");
		$('body, html').animate({scrollTop: $(this).offset().top},900);
	});
	$(".vaicaianh a").fancybox();
});