$(document).ready(function(){
	function heightDetect(){
		$('.section-bg').css('height', $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
});
