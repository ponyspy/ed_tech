$(function() {

	$('.column_body').not('.draw').each(function() {
		new SimpleBar(this);
	});

	var draw_el = $('.draw')[0];
	var pad = new Sketchpad(draw_el);

	pad.setLineSize(12);
	pad.setLineColor('#ee3831');
	setTimeout(function() {
		pad.setCanvasSize(draw_el.offsetWidth, draw_el.offsetHeight);
	}, 300);

	$(window).on('resize', function(e) {
		pad.setCanvasSize(draw_el.offsetWidth, draw_el.offsetHeight);
		pad.redraw();
	});

	$('.clear').on('click', function(e) {
		pad.clear();
	});

	$('.dl').on('click', function(e) {
		this.href = pad.canvas.toDataURL('image/png');
		this.download = 'draw';
	});

	$('.section_item').on('click', function(e) {
		$('.section_item').removeClass('active').filter(this).addClass('active');
	});

});