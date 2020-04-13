$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:8,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:7
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:6
				}
            {
				breakpoint: 768,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:4
				}
            {
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:2
				}
            {
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			
			}
		]
	});
});

