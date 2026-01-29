$(document).ready(function() {


	// ===========================================================================
	//
	// Notification banner for IE lt 9

	var ieNotification = $('.browsehappy');
	$('.browsehappy__dismiss').click(function() {
		ieNotification.remove();
	});


	// ===========================================================================
	//
	// SVG Fallback for older browsers

	if (!Modernizr.svg) {
	  $('img[src$=".svg"]').each(function() {
      //Replace 'image.svg' with 'image.png'.
      $(this).attr('src', $(this).attr('src').replace('.svg', '.png'));
	  });
	}


  // ===========================================================================
  //
	// Show menu navigation on smaller screen resolutions

	var menu = $('.page-nav__list');

	$('#page-nav-button').click(function() {
		menu.slideToggle(500);
	});

	$(window).on('resize', function(){     
		if(!$('#page-nav-button').is(':visible') && !menu.is(':visible')) {
			menu.css({'display':''});   
		}
	});



  // ===========================================================================
  //
  // Smooth scroll-to links

  $('.js-scroll-to').click(function(e){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    e.preventDefault();
  });



  // ===========================================================================
  //
  // Misc (stuff related to menu navigation)
  function checkWidth() {

    if ($(window).width() >= 991) {
    	// On desktop resolution remove subnav state classes
      $('.js-subnav-trigger').removeClass('is-active');
      $('.page-subnav').removeClass('is-open');
    }

    else if ($(window).width() <= 990) {

    	// Close menu navigation after clicking on menu link 
    	// (except Restaurant Menu link)
      $('.page-nav__link').not('.js-subnav-trigger').click(function () {
					$('.page-nav__list').css({'display':''});
      });

			// On tablet and mobile resolutions enable showing subnavigation
      $('.js-subnav-trigger').click(function () {
      	$(this).toggleClass('is-active');
      	$('.page-subnav').toggleClass('is-open');
      });

    }
  }

  // Execute on load
  checkWidth();
  // Bind event listener
  $(window).resize(checkWidth);



  // ===========================================================================
  //
	// Show time

	// (function () {
	//     function checkTime(i) {
	//         return (i < 10) ? "0" + i : i;
	//     }

	//     function startTime() {
	//         var today = new Date(),
	//             h = checkTime(today.getHours()),
	//             m = checkTime(today.getMinutes()),
	//             s = checkTime(today.getSeconds());
	//         // document.getElementById('js-time-intro').innerHTML = h + ":" + m + ":" + s;
	//         document.getElementById('js-time-contact').innerHTML = h + ":" + m + ":" + s;
	//         document.getElementById('js-time-footer').innerHTML = h + ":" + m + ":" + s;
	//         t = setTimeout(function () {
	//             startTime();
	//         }, 500);
	//     }
	//     startTime();
	// })();


  // ===========================================================================
  //
	// Equal heght sections

  var $equalHeight = $('.js-element-equal-height');
  var height = 0;
  $equalHeight.each(function () {
    if ($(this).height() > height) {
      height = $(this).height();
    }
  });
  $equalHeight.height(height);


  // ===========================================================================
  //
  // Stuck Reserve button on top of the screen
  
  $('.js-cta-sticky').stick_in_parent({
  	sticky_class: 'is-stuck'
  });


  // ===========================================================================
  //
  // Private dining carousel
	
	$('.js-private-dining-gallery').slick({
			dots: true,
			autoplay: true,
			autoplaySpeed: 4000,
			fade: true,
			cssEase: 'linear'
		});


  // ===========================================================================
  //
  // Intro carousel
   
  // This code is placed inside HTML pages


}); // end document ready