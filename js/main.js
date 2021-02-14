$(function() {

	var column_scroll = OverlayScrollbars($('.column_body').not('.draw').toArray(), {
		scrollbars : { autoHideDelay: 300, autoHide: 'scroll' }
	});

	var draw_el = $('.draw')[0];
	var pad = new Sketchpad(draw_el);

	pad.setLineSize(8);
	pad.setLineColor('#ee3831');
	setTimeout(function() {
		pad.setCanvasSize(draw_el.offsetWidth - 40, draw_el.offsetHeight - 40);
	}, 300);

	$(window).on('resize', function(e) {
		pad.setCanvasSize(draw_el.offsetWidth - 40, draw_el.offsetHeight - 40);
		pad.redraw();
	}).trigger('resize');

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