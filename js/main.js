 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

;(function($) {

	"use strict";

    $('[href="#"]').attr('href', 'javascript:;');

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center:false,
		    items:2,
		    loop:true,
            stagePadding:10,
		    margin: 30,
		    //smartSpeed: 1000,
            slideSpeed :800,
		    autoplay:false,
            autoplayTimeout:1000,
            autoplayHoverPause:false,

		    nav: true,
				navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		    responsive:{
	        600:{
	        	margin: 30,
	        	nav: true,
	            items: 2
            
	        },
	        1000:{
	        	margin: 30,
	        	nav: true,
	            items: 3
	        },
	        1200:{
	        	margin: 30,
	        	nav: true,
	           items: 4
	        }
		    }
			});
		}

    $('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
        dots: true,
	    loop: true,
        stagePadding: 0,
        smartSpeed: 1000,
	    margin: 0,
	    autoplay: false,
	    pauseOnHover: false,
	    nav: false,
	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	  });


//
//    $('.slide-one-item-edge').owlCarousel({
//	    center: false,
//	    items: 1,
//        dots: true,
//	    loop: true,
//        stagePadding: 0,
//        smartSpeed: 1000,
//	    margin: 0,
//	    autoplay: false,
//	    pauseOnHover: false,
//	    nav: false
//	  });
        
	};

	siteCarousel();
    
    var learnCarousel = function () {
      $('.slide-two-item').owlCarousel({
	    center: false,
	    items: 1,
        dots: true,
	    loop: true,
        stagePadding: 0,
        smartSpeed: 1000,
	    margin: 20,
	    autoplay: false,
	    pauseOnHover: false,
	    nav: false,
	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive:{
	        600:{
	        	margin: 30,
	        	nav: true,
	            items: 1

	        },
	        1000:{
	        	margin: 30,
	        	nav: true,
	            items: 2
	        },
	        1200:{
	        	margin: 30,
	        	nav: true,
	           items: 2
	        }
		  }
	  });
    };

	learnCarousel();
    
     var mediaCarousel2 = function () {
      $('.slide-two-item-3').owlCarousel({
	    center: false,
	    items: 1,
        dots: true,
	    loop: true,
        stagePadding: 0,
	    margin: 20,
	    autoplay: true,
        
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive:{
	        600:{
	        	margin: 30,
	        	nav: true,
	            items: 1
	        },
	        1000:{
	        	margin: 30,
	        	nav: true,
	            items: 3
	        },
	        1200:{
	        	margin: 30,
	        	nav: true,
	           items: 3
	        }
		  }
	  });
    };

	mediaCarousel2();

    var homeCarousel = function () {
        $('.nonloop-block-199').owlCarousel({
            center:false,
		    loop:false,
            items:1,
            stagePadding:10,
		    margin: 30,
		    //smartSpeed: 1000,
            slideSpeed :800,
		    autoplay:false,
            autoplayTimeout:1000,
            autoplayHoverPause:false,
		    nav: true,
				navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		    responsive:{
	        600:{
	        	margin: 30,
	        	nav: true,
	            items: 2

	        },
	        1000:{
	        	margin: 30,
	        	nav: true,
	            items: 3
	        },
	        1200:{
	        	margin: 30,
	        	nav: true,
	           items: 4
	        }
		    }
          });
    };
	homeCarousel();
    
     var coachCarousel = function () {
        $('.nonloop-block-1999').owlCarousel({
            center:false,
		    loop:false,
            items:1,
            stagePadding:10,
		    margin: 30,
		    //smartSpeed: 1000,
            slideSpeed :800,
		    autoplay:false,
            autoplayTimeout:1000,
            autoplayHoverPause:false,
		    nav: true,
				navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		    responsive:{
	        600:{
	        	margin: 30,
	        	nav: true,
	            items: 2

	        },
	        1000:{
	        	margin: 30,
	        	nav: true,
	            items: 2
	        },
	        1200:{
	        	margin: 30,
	        	nav: true,
	           items: 2
	        }
		    }
          });
    };
	coachCarousel();


    var sessionCarousel = function () {
        $('.nonloop-block-200').owlCarousel({
            center:false,
		    loop:false,
            items:1,
            stagePadding:10,
		    margin: 30,
		    //smartSpeed: 1000,
            slideSpeed :800,
		    autoplay:false,
            autoplayTimeout:1000,
            autoplayHoverPause:false,
		    nav: true,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		    responsive:{
                600:{
                    margin: 30,
                    nav: true,
                    items: 1

                },
                1000:{
                    margin: 30,
                    nav: true,
                    items: 2
                },
                1200:{
                    margin: 30,
                    nav: true,
                    items: 3
                }
		    }
          });
    };
	sessionCarousel();


    var sessionCarousel = function () {
        $('.nonloop-block-201').owlCarousel({
            center:false,
		    loop:true,
            items:1,
            stagePadding:10,
		    margin: 30,
		    //smartSpeed: 1000,
            slideSpeed :800,
		    autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:false,
		    nav: true,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		    responsive:{
                600:{
                    margin: 30,
                    nav: true,
                    items: 1

                },
                1000:{
                    margin: 30,
                    nav: true,
                    items: 4
                },
                1200:{
                    margin: 30,
                    nav: true,
                    items: 5
                }
		    }
          });
    };
	sessionCarousel();



     var sitePagination = function() {
        var items = $(".list-wrapper .list-item");
        var numItems = items.length;
        var perPage = 3;

        items.slice(perPage).hide();

        $('#pagination-container').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
    };
        
    sitePagination();
    

    var eventPagination = function() {
        var items = $(".list-wrapper-event .list-item-event");
        var numItems = items.length;
        var perPage = 20;

        items.slice(perPage).hide();

        $('#pagination-container-event').pagination({
            items: numItems,
            itemsOnPage: perPage,
            prevText: "&laquo;",
            nextText: "&raquo;",
            onPageClick: function (pageNumber) {
                var showFrom = perPage * (pageNumber - 1);
                var showTo = showFrom + perPage;
                items.hide().slice(showFrom, showTo).show();
            }
        });
    };

    eventPagination();

    var siteMagnificPopup = function() {
        if($.fn.magnificPopup === undefined) return;
        
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();

})(jQuery)
