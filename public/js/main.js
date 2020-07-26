/* eslint-disable no-undef */
(function () {
	
  'use strict';

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  // iPad and iPod detection	
  let isiPad = function() {
    return (navigator.platform.indexOf('iPad') != -1);
  };

  let isiPhone = function() {
	    return (
      (navigator.platform.indexOf('iPhone') != -1) || 
			(navigator.platform.indexOf('iPod') != -1)
	    );
  };


  let fullHeight = function() {

    $('.js-fullheight').css({ 'height': $(window).height(), 'padding': '10%' });
    $(window).resize(() => {
      $('.js-fullheight').css({ 'height': $(window).height(), 'padding': '10%' });
    });

  };

  let burgerMenu = function() {

    $('.js-colorlib-nav-toggle').on('click', function(event) {
      event.preventDefault();
      let $this = $(this);
      if ($('body').hasClass('menu-show')) {
        $('body').removeClass('menu-show');
        $('#colorlib-main-nav > .js-colorlib-nav-toggle').removeClass('show');
      } else {
        $('body').addClass('menu-show');
        setTimeout(() => {
          $('#colorlib-main-nav > .js-colorlib-nav-toggle').addClass('show');
        }, 900);
      }
    });
  };

  // Animations

  let contentWayPoint = function() {
    let i = 0;
    $('.animate-box').waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {
				
        i++;

        $(this.element).addClass('item-animate');
        setTimeout(() => {

          $('body .animate-box.item-animate').each(function(k) {
            let el = $(this);
            setTimeout(() => {
              let effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated');
              } else {
                el.addClass('fadeInUp animated');
              }

              el.removeClass('item-animate');
            },  k * 200, 'easeInOutExpo');
          });
					
        }, 100);
				
      }

    }, { offset: '85%' });
  };


  let counter = function() {
    $('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    }
    });
  };

  let counterWayPoint = function() {
    if ($('#colorlib-counter').length > 0) {
      $('#colorlib-counter').waypoint(function(direction) {
										
        if (direction === 'down' && !$(this.element).hasClass('animated')) {
          setTimeout(counter, 400);					
          $(this.element).addClass('animated');
        }
      }, { offset: '90%' });
    }
  };

  let sliderMain = function() {
		
	  	$('#colorlib-hero .flexslider').flexslider({
      animation: 'fade',
      slideshowSpeed: 5000,
      directionNav: true,
      start: function() {
        setTimeout(() => {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      },
      before: function() {
        setTimeout(() => {
          $('.slider-text').removeClass('animated fadeInUp');
          $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
        }, 500);
      }

	  	});

  };

  let parallax = function() {

    if (!isMobile.any()) {
      $(window).stellar({
        horizontalScrolling: false,
        hideDistantElements: false, 
        responsive: true

      });
    }
  };

  // Owl Carousel
  let owlCarouselFeatureSlide = function() {
    let owl2 = $('.owl-carousel');
    owl2.owlCarousel({
      animateOut: 'fadeOut',
		   animateIn: 'fadeIn',
		   autoplay: true,
		   loop: true,
		   margin: 0,
		   nav: false,
		   dots: true,
		   autoHeight: true,
		   items: 1,
		   navText: [
		      '<i class=\'icon-arrow-left3 owl-direction\'></i>',
		      '<i class=\'icon-arrow-right3 owl-direction\'></i>'
	     	]
    });
  };

  let goHere = function() {

    $('.mouse-icon').on('click', event => {
			
      event.preventDefault();

      $('html,body').animate({
        scrollTop: $('.goto-here').offset().top
      }, 500, 'easeInOutExpo');
			
      return false;
    });
  };

  let datePicker = function() {
    jQuery('.date').datepicker({
		  'format': 'm/d/yyyy',
		  'autoclose': true
    });
  };

  const initializeFireBase = () => {
    // Initialize Cloud Firestore through Firebase
    // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: 'AIzaSyAge1aT-5gyoEEjIKpeeUiSlDYqCOzunk0',
      authDomain: 'attee-website.firebaseapp.com',
      databaseURL: 'https://attee-website.firebaseio.com',
      projectId: 'attee-website',
      storageBucket: 'attee-website.appspot.com',
      messagingSenderId: '679273532044',
      appId: '1:679273532044:web:b3d288790a3a7e27fc49a9',
      measurementId: 'G-2W7TQSHP6P'
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  };

  let attachSubmitMessage = () => {
    jQuery('#submitform').submit(e => {
      e.preventDefault();
      // get all the inputs into an array.
      let $inputs = jQuery('#submitform :input');

      // not sure if you wanted this, but I thought I'd add it.
      // get an associative array of just the values.
      let values = {};
      $inputs.each(function() {
        Boolean(this.name) && this.name!== 'submit' && (values[this.name] = jQuery(this).val());
      });

      let db = firebase.firestore();
      db.collection('comments').add(values)
        .then(docRef => {
          jQuery('.alert-success').alert();
          jQuery.confirm({
            title: 'Success',
            content: 'Data added successfully',
            type: 'green',
            typeAnimated: true,
            buttons: {
              // tryAgain: {
              //   text: 'Try again',
              //   btnClass: 'btn-red',
              //   action: function() {
              //   }
              // },
              close: function () {

              }
            }
          });
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(error => {
          jQuery('.alert-danger').alert();
          jQuery.confirm({
            title: 'Error',
            content: 'Some Problem in adding the message',
            type: 'green',
            typeAnimated: true,
            buttons: {
              // tryAgain: {
              //   text: 'Try again',
              //   btnClass: 'btn-red',
              //   action: function() {
              //   }
              // },
              close: function () {

              }
            }
          });
          console.error('Error adding document: ', error);
        })
        .finally(() => {
          jQuery('[name=message]').val('');
          jQuery('[name=name]').val('');
          jQuery('[name=email]').val('');
        });
    });
  };

	


  // Document on load.
  $(() => {
    fullHeight();
    burgerMenu();
    counterWayPoint();
    contentWayPoint();
    parallax();
    sliderMain();
    owlCarouselFeatureSlide();
    goHere();
    datePicker();
    initializeFireBase();
    attachSubmitMessage();
  });


}());