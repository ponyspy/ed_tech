$(function() {

	$('.section_item').on('mouseenter', function() {
		$('.section_item').removeClass('active').filter(this).addClass('active');
	});

	var draw_el = $('.draw')[0];
	var pad = new Sketchpad(draw_el, {
		width: draw_el.offsetWidth - 40,
		height: draw_el.offsetHeight - 40
	});

	pad.setLineSize(8);
	pad.setLineColor('#ee3831');

	window.onresize = function(e) {
		pad.setCanvasSize(draw_el.offsetWidth - 40, draw_el.offsetHeight - 40);
		pad.redraw();
	}

	$('.clear').on('click', function(e) {
		pad.clear();
	});

	$('.dl').on('click', function() {
		var data = pad.canvas.toDataURL('image/png');

		this.href = data;
		this.download = 'draw';
	});

});