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