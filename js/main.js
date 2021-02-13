$(function() {

	$('.header_block').marquee({
		//duration in milliseconds of the marquee
		duration: 10000,
		//gap in pixels between the tickers
		gap: 40,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: false
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

	$('.section_item').on('click', function() {
		$('.section_item').removeClass('active').filter(this).addClass('active');
	});

});