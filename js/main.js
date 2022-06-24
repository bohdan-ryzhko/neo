$(function () {

	$('.apartments__btn').on('click', function () {
		$('.apartments__btn-list').toggleClass('apartments__btn-list--active');
	});

	$('.rules__item').on('click', function () {
		$(this).toggleClass('rules__item--active');
	});

	$('.menu__burger').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

	$('.facilities__btn').on('click', function () {
		$('.facilities__btn-list').toggleClass('facilities__btn-list--active');
	});

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="../images/studio/arrow-prev.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="../images/studio/arrow-next.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},

			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 0.75,
				}
			},

			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 0.87,
				}
			},
		]
	});

	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

});

new AirDatepicker('.apartments__input--1', {

	minDate: new Date(),

	isMobile: true,
	autoClose: true,

	prevHtml: '<img src="./images/input-next.svg" alt="">',
	nextHtml: '<img src="./images/input-prev.svg" alt="">',

	onSelect({ date }) {
		dpMax.update({
			minDate: date
		})
	},
});

new AirDatepicker('.apartments__input--2', {

	minDate: new Date(),

	isMobile: true,
	autoClose: true,

	prevHtml: '<img src="./images/input-next.svg" alt="">',
	nextHtml: '<img src="./images/input-prev.svg" alt="">',

	onSelect({ date }) {
		dpMin.update({
			maxDate: date
		})
	}
});


new AirDatepicker('.facilities__input--1', {

	minDate: new Date(),

	isMobile: true,
	autoClose: true,

	prevHtml: '<img src="./images/input-next.svg" alt="">',
	nextHtml: '<img src="./images/input-prev.svg" alt="">',

	onSelect({ date }) {
		dpMax.update({
			minDate: date
		})
	},
});

new AirDatepicker('.facilities__input--2', {

	minDate: new Date(),

	isMobile: true,
	autoClose: true,

	prevHtml: '<img src="./images/input-next.svg" alt="">',
	nextHtml: '<img src="./images/input-prev.svg" alt="">',

	onSelect({ date }) {
		dpMax.update({
			minDate: date
		})
	},
});