/*--------------------------------------------------------------------- */

jQuery(document).ready(function ($) {

    "use strict";

    /*--------------------------- Start Document ---------------------------*/

    /*--------------------------------------------------------------------- */
    /* # Header Layout Options */
    /*--------------------------------------------------------------------- */

    jQuery(function () {

        var header = jQuery('#header');

        if (header.hasClass('video')) {
            jQuery('#bg-video').show();
            header.css('background', 'transparent');

			var videoSize = function () {
				var w = jQuery(window).width();
				jQuery('#bg-video').attr('width', w);
			};
			videoSize();
	
			jQuery(window).resize(function () {
				videoSize();
			});
	
	
			var w = jQuery(window).width();
	
			var videoResize = (function () {
				var videoHeight = jQuery('#bg-video').height();
				jQuery('#header.video').css('height', videoHeight - 20 + 'px');
			});
	
			videoResize();
	
			jQuery(window).resize(function () {
	
				var w = jQuery(window).width();
				if (w > 960) {
					videoResize();
				}
			});
	
			new MediaElement('bg-video', {
				// shows debug errors on screen
				enablePluginDebug: false,
				// remove or reorder to change plugin priority
				plugins: ['flash', 'silverlight'],
				// specify to force MediaElement to use a particular video or audio type
				type: '',
				// path to Flash and Silverlight plugins
				pluginPath: '/js/',
				// name of flash file
				flashName: 'flashmediaelement.swf',
				// name of silverlight file
				silverlightName: 'silverlightmediaelement.xap',
				// default if the <video width> is not specified
				defaultVideoWidth: 480,
				// default if the <video height> is not specified    
				defaultVideoHeight: 270,
				// overrides <video width>
				pluginWidth: -1,
				// overrides <video height>      
				pluginHeight: -1,
				// rate in milliseconds for Flash and Silverlight to fire the timeupdate event
				// larger number is less accurate, but less strain on plugin->JavaScript bridge
				timerRate: 250,
				// method that fires when the Flash or Silverlight object is ready
				success: function (mediaElement, domObject) {
	
					// add event listener
					mediaElement.addEventListener('timeupdate', function (e) {
	
						// document.getElementById('current-time').innerHTML = mediaElement.currentTime;
	
					}, false);
	
					// call the play method
					mediaElement.play();
	
				},
				// fires when a problem is detected
				error: function () {
	
				}
			});


        } else if (header.hasClass('slider')) {
            jQuery('#background-slider').show();
            header.css('background', 'transparent');
        }

    });

    /*--------------------------------------------------------------------- */
    /* # Navigation / Menu Items */
    /*--------------------------------------------------------------------- */

    /* Highlight Active */
    jQuery(function () {

        var menuItem = jQuery('#menu a');

        menuItem.click(function () {
            menuItem.removeClass('active');
            jQuery(this).addClass('active');
        });

    });

    /* Submenu */
    jQuery(function () {

        jQuery('.menu li.multi-menu').hover(function () {
            jQuery('#submenud-fullwidth').stop().slideDown();
            jQuery(this).find('ul').stop().slideDown();

        }, function () {
            jQuery('#submenud-fullwidth').stop().slideUp();
            jQuery(this).find('ul').stop().slideUp();
        });
    });



    /*--------------------------------------------------------------------- */
    /* # Navigation / Mobile Menu */
    /*--------------------------------------------------------------------- */

    /* Sticky Nav */
    jQuery("#navbar").waypoint('sticky', {
        offset: -500
    });


    /* Mobile Menu */
    jQuery(function () {

        var mobileMenu = jQuery('.mobile-menu');
        var menu = jQuery('.menu');
        var menuHeight = menu.height();

        jQuery(mobileMenu).on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            menu.slideToggle();
        });

        jQuery(window).resize(function () {
            var w = jQuery(window).width();
            if (w > 760 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });

    });

    /*--------------------------------------------------------------------- */
    /* # Navigation / Back Top */
    /*--------------------------------------------------------------------- */

    jQuery(function () {

        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 600) {
                jQuery('#back-top').removeClass('downscaled');
            } else {
                jQuery('#back-top').addClass('downscaled');
            }
        });

        jQuery('#back-top').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

    });

    /*--------------------------------------------------------------------- */
    /* # Resume / Skill Bars */
    /*--------------------------------------------------------------------- */

    jQuery(function () {

        var skillBar = jQuery('.skill-bar');

        var createBar = function (math) {

            skillBar.each(function () {

                var percent = jQuery(this).data('percent'),
                    skillBarWidth = percent * math + 'px';

                jQuery(this).css('width', skillBarWidth);

            });
        };

        var math = 3.6;

        var loadBar = function () {

            var w = jQuery(window).width();

            if (w < 479) {
                createBar(math / 1.8);
            } else if (w < 959) {
                createBar(math / 1.35);
            } else {
                createBar(math);
            }

        };

        jQuery(window).load(function () {
            loadBar();
        });
        jQuery(window).resize(function () {
            loadBar();
        });

    });

    /*--------------------------------------------------------------------- */
    /* # Animation Effects */
    /*--------------------------------------------------------------------- */

    // If you don't want one of theese animations, 
    // just simply uncomment or delete them


    // Nav Icons
    jQuery('.menu i').addClass('animated fadeInDown');

    // Page Titles
    jQuery('#header').waypoint(function () {

        jQuery('.page-title').addClass('animated fadeInUp');

    }, {
        offset: -100
    });


    // My Profile / Profile infos
    jQuery('#profile').waypoint(function () {

        var $items = jQuery('.profile-info p');

        $items.each(function (i) {
            jQuery(this).css({
                '-webkit-animation-delay': (i * 0.4) + "s",
                    '-moz-animation-delay': (i * 0.4) + "s",
                    '-ms-animation-delay': (i * 0.4) + "s",
                    '-o-animation-delay': (i * 0.4) + "s",
                    'animation-delay': (i * 0.4) + "s"
            });
        });

        $items.addClass('animated fadeInLeftBig');

    }, {
        offset: 300
    });


    // Services / Process Parts
    jQuery('#process').waypoint(function () {

        jQuery('.process-part').addClass('animated fadeInUp');

    }, {
        offset: 800
    });


    // Portfolio / Filters
    jQuery('#portfolio').waypoint(function () {

        jQuery('.filter').addClass('animated bounceIn');

    }, {
        offset: 800
    });


    // Portfolio / Portfolio Items
    jQuery('#portfolio-wrapper').waypoint(function () {

        jQuery('#portfolio-wrapper').addClass('animated fadeInDown');

    }, {
        offset: 600
    });


    // Resume / Skill Bars
    jQuery('#resume').waypoint(function () {

        var $items = jQuery('.skill');

        $items.each(function (i) {
            jQuery(this).css({
                '-webkit-animation-delay': (i * 0.3) + "s",
                    '-moz-animation-delay': (i * 0.3) + "s",
                    '-ms-animation-delay': (i * 0.3) + "s",
                    '-o-animation-delay': (i * 0.3) + "s",
                    'animation-delay': (i * 0.3) + "s"
            });
        });

        $items.addClass('animated fadeInRightBig');

    }, {
        offset: 800
    });


    // Button Bar / Button
    jQuery('.button').hover(function () {
        jQuery(this).addClass('animated flipInX').css('animation-duration', '1.3s');
    });

    // Contact / Input Fields
    jQuery('#contact').waypoint(function () {

        var $items = jQuery('.contact-details li');

        $items.each(function (i) {
            jQuery(this).css({
                '-webkit-animation-delay': (i * 0.3) + "s",
                    '-moz-animation-delay': (i * 0.3) + "s",
                    '-ms-animation-delay': (i * 0.3) + "s",
                    '-o-animation-delay': (i * 0.3) + "s",
                    'animation-delay': (i * 0.3) + "s"
            });
        });

        $items.addClass('animated fadeInRightBig');

    }, {
        offset: 800
    });



    /*--------------------------------------------------------------------- */
    /* # Contact Form */
    /*--------------------------------------------------------------------- */

    jQuery(function () {

        jQuery("#contact-form").on("submit", function (e) {
            var action = jQuery("#contact-form").attr('data-action');
            if (jQuery("#contact-form")[0].checkValidity()) {
                jQuery.post(action, jQuery("#contact-form").serialize(), function (response) {
                    jQuery('#success').fadeIn(500).html(response);
                    jQuery("#contact-form .button").hide();
                    jQuery("#contact-form").css('opacity', '0');
                    e.preventDefault();
                });
            } else console.log("invalid form");
            e.preventDefault(); // stop actual submission
        });

    });


    if (jQuery().twittie) {
        jQuery('.tweet').twittie();
    }

    if (jQuery().prettyPhoto) {
        jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		});
    }

    /*--------------------------- End Document ---------------------------*/
});