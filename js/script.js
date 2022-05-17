$(function() {

	$('.slider-item').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		responsive: [
		    {
		      breakpoint: 1700,
		      settings: {
		        slidesToShow: 2,
			  	slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 1170,
		      settings: {
		        slidesToShow: 1,
			  	slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 1094,
		      settings: {
		        slidesToShow: 2,
			  	slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 780,
		      settings: {
		        slidesToShow: 1,
			  	slidesToScroll: 1
		      }
		    }

		  ]
	});

	$('.menu-burger').click(function(event) {
		$('.menu-burger,.menu-mobile,.menu-mobile-main,.hits').toggleClass('active');
	});

})
