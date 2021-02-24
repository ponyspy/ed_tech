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

  var swPhotos = new Swiper('.swiper-photos', {
  	spaceBetween: 140,
    centeredSlides: true,
    loop: true,
    // simulateTouch: false,
    keyboard: {
      enabled: true
    },
    breakpoints: {
      1250: {
        // autoHeight: true,
        slidesPerView: 2
      },
      1200: {
        // autoHeight: true,
        slidesPerView: 1
      }
    },
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    }
  });

	$('.section_item').on('click', function(e) {
		$('.section_item').removeClass('active').filter(this).addClass('active');
		swPhotos.update();
	});

	$('.swiper-photos').on('click', '.swiper-slide', function(e) {
		if ($(document).width() <= 800) return false;

		var $this = $(this);

		if ($this.hasClass('swiper-slide-next')) {
			swPhotos.slideNext();
		} else if ($this.hasClass('swiper-slide-prev')) {
			swPhotos.slidePrev();
		}
	});

});