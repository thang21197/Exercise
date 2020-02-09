jQuery(document).ready(function($) {
	$('.content').isotope({
		itemSelector:'li'	});
	$('header li a').click(function(event) {
		var danhmuc= $(this).data('class');
		var ten=$(this).text();
		danhmuc='.'+danhmuc;	
		if (danhmuc=='.all') {
			$('h1').text('Tất cả ảnh');
			$('.content').isotope({	filter:'*'});
		}else{
			$('h1').text(ten);
			$('.content').isotope({	filter:danhmuc});
		}
		return false;
	});
    // $('.tukhoa').keypress(function(event) {
    // 	if(event.keyCode == '13'){
    // 		var tu=$('.tukhoa').val();
    // 		tu='.'+tu;
    // 		console.log(tu);
    // 		$('.content').isotope({	filter:tu});
    // 	}
    // });
    var thoigian=setInterval(function(){
            var tu=$('.tukhoa').val();
    		tu='.'+tu;
    		console.log(tu);
    		$('.content').isotope({	filter:tu});
    },200);
});