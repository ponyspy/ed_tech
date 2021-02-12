$(function() {
	$('.section_item').on('click', function() {
		$('.section_item').removeClass('active').filter(this).addClass('active');
	});
});