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
  // Controls for a tabbed interface which remembers #id in address bar.
  
  // A temp value to cache *what* we're about to show
    var target = null;

    // collect all the tabs
    var tabs = $('.tab-nav__link').on('click', function () {
      console.log('click');
      target = $(this.hash).removeAttr('id');
      if (location.hash === this.hash) {
        setTimeout(update);
      }
    }).attr('tabindex', '0');

    // get an array of the panel ids (from the anchor hash)
    var targets = tabs.map(function () {
      return this.hash;
    }).get();

    // use those ids to get a jQuery collection of panels
    var panels = $(targets.join(',')).each(function () {
      // keep a copy of what the original el.id was
      $(this).data('old-id', this.id);
    });

    function update() {
      console.log('update');
      if (target) {
        target.attr('id', target.data('old-id'));
        target = null;
      }
      
      var hash = window.location.hash;
      if (targets.indexOf(hash) !== -1) {
        return show(hash);
      }
      
      // fix going "back" on the browser nav to an empty state
      if (!hash) {
        show();
      }
    }

    function show(id) {
      // if no value was given, let's take the first panel
      if (!id) {
        id = targets[0];
      }
      // remove the selected class from the tabs,
      // and add it back to the one the user selected
      tabs.removeClass('is-active').attr('aria-selected', 'false').filter(function () {
        return (this.hash === id);
      }).addClass('is-active').attr('aria-selected', 'true');

      // now hide all the panels, then filter to
      // the one we're interested in, and show it
      panels.hide().attr('aria-hidden', 'true').filter(id).fadeIn().attr('aria-hidden', 'false');
    }

    window.addEventListener('hashchange', update);

    // initialise
    if (targets.indexOf(window.location.hash) !== -1) {
      update();
    } else {
      show();
    }

}); // end document ready