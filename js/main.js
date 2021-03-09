var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(function() {

	$(document).on('scroll', function(e) {
		var $main_title = $('.main_title');
		var stop_offset = $('.main_desc').offset().top - $main_title.height() - 80;

		$(this).scrollTop() >= stop_offset
			? $main_title.css('top', stop_offset).addClass('fix')
			: $main_title.removeAttr('style').removeClass('fix');
	});

	setTimeout(function() {
		$('.column_body').not('.draw, .photos').each(function() {
			new SimpleBar(this);
		});
	}, 300);

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

	if (!is_mobile) {
		$(document).on('mousemove', '.slider_block', function(e) {
			var $this = $(this);
			var padding = 100;
			var percent = (e.pageX - $this.offset().left - padding) / ($this.width() - padding * 2);
			// console.log((e.pageX - $this.offset().left) / $this.width() * 100) // real percentage

			$this.scrollLeft((this.scrollWidth - $this.width()) * percent);
		});
	}

});