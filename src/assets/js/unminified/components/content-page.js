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
  // Misc (stuff related to menu navigation)
  function checkWidth() {

    if ($(window).width() >= 991) {
    	// On desktop resolution remove subnav state classes
      $('.js-subnav-trigger').removeClass('is-active');
      $('.page-subnav').removeClass('is-open');
    }

    else if ($(window).width() <= 990) {

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

  (function () {
      function checkTime(i) {
          return (i < 10) ? "0" + i : i;
      }

      function startTime() {
          var today = new Date(),
              h = checkTime(today.getHours()),
              m = checkTime(today.getMinutes()),
              s = checkTime(today.getSeconds());
          document.getElementById('js-time-footer').innerHTML = h + ":" + m + ":" + s;
          t = setTimeout(function () {
              startTime();
          }, 500);
      }
      startTime();
  })();



  // ===========================================================================
  //
  // Accordion
  function closeAccordionSection() {
    $('.accordion__title').removeClass('is-active');
    $('.accordion__title-image').removeClass('is-active');
    $('.accordion__content').slideUp(400).removeClass('is-open');
  }

  $('.accordion__title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');

    if($(e.target).is('.is-active')) {
      closeAccordionSection();
    }else {
      closeAccordionSection();

      // Add is-active class to section title
      $(this).addClass('is-active');
      $(this).closest('.accordion__header').find('.accordion__title-image').addClass('is-active');
      // Open up the hidden content panel
      $('.accordion ' + currentAttrValue).slideDown(400).addClass('is-open');
    }

    e.preventDefault();
  });


}); // end document ready
