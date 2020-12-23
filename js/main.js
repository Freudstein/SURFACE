$(document).ready(function(){
	$('.athlets__slider').slick({
		arrows: false,
		infinite: true,
		dots: true,
		appendDots: $('.athlets__slider-nav'),
		mobileFirst: true,
		responsive: [
				{
					breakpoint: 768,
					settings: "unslick"
				}
		]
	});

	$('.players__slider').slick({
		arrows: false,
		infinite: true,
		dots: true,
		appendDots: $('.players__slider-nav'),
		mobileFirst: true,
		responsive: [
				{
					breakpoint: 768,
					settings: "unslick"
				}
		]
	});
});