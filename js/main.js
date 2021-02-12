$(function() {

	$('.section_item').on('click', function() {
		$('.section_item').removeClass('active').filter(this).addClass('active');
	});

	var draw_el = $('.draw')[0];
	var pad = new Sketchpad(draw_el, {
		line: {
			size: 5
		}
	});

	pad.setLineColor('#ee3831');
	pad.resize(draw_el.offsetWidth - 40);

	window.onresize = function(e) {
		pad.resize(draw_el.offsetWidth - 40);
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