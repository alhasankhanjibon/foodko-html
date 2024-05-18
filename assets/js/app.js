"use strict";

(function ($) {
  "use strict";

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    sofax PRELOADER JS INIT
    --------------------------------------------------------------*/

    $(".sofax-preloader-wrap").fadeOut(500);

    /*--------------------------------------------------------------
    sofax STICKY MENU JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });
    /*--------------------------------------------------------------
    SOFAX BUTTON JS INIT
    --------------------------------------------------------------*/

    /*--------------------------------------------------------------
    sofax COUNTER JS INIT
    --------------------------------------------------------------*/
    var sofax_counter = $('#sofax-counter');
    if (sofax_counter.is_exist()) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(sofax_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.sofax-counter').each(function () {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 4000,
              easing: 'swing',
              step: function step() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function complete() {
                $this.text(this.countNum);
              }
            });
          });
          a = 1;
        }
      });
    }
    $('.sofax-testimonial-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1349,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });
    $('.sofax-testimonial-slider-2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      pauseOnHover: false,
      rtl: true,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1349,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }]
    });

    // sofax integration images slider 

    $('.sofax-integration-slider-icon-data').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      responsive: [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }]
    });
    $('.sofax-integration-slider-icon-data-wrap').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      arrows: false,
      pauseOnHover: false,
      cssEase: 'linear',
      rtl: true,
      responsive: [{
        breakpoint: 1399,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 767,
        settings: {
          slidesToShow: 2
        }
      }]
    });

    // testimonial 2column slider active

    // $('.sofax-testimonial-2column-slider').slick({
    //   slidesToShow:1,
    //   slidesToScroll: 1,
    //   autoplay: false,
    //   arrows: true,
    //   prevArrow: '<button class="slide-arrow sofax-t-next"></button>',
    //   nextArrow: '<button class="slide-arrow sofax-t-prev"></button>',
    // });

    //  v5
    $('.sofax-testimonial-2column-sliderv5').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      prevArrow: '<button class="slide-arrow sofax-t-next"></button>',
      nextArrow: '<button class="slide-arrow sofax-t-prev"></button>'
    });
    // button animation

    var buttons = document.querySelectorAll(".sofax-default-btn");
    buttons.forEach(function (button) {
      ["mouseenter", "mouseout"].forEach(function (evt) {
        button.addEventListener(evt, function (e) {
          var parentOffset = button.getBoundingClientRect(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          var span = button.getElementsByTagName("span");
          span[0].style.top = relY + "px";
          span[0].style.left = relX + "px";
        });
      });
    });

    /*--------------------------------------------------------------
    sofax MAGNIFIC POPUP JS INIT
    ------------------------------------------------------------*/
    var popup_youtube = $('.video-init');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
    var popup_youtube = $('.play-video');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
    var popup_youtube = $('.aboutus-video');
    if (popup_youtube.is_exist()) {
      popup_youtube.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade'
      });
    }
    // testimonial slider

    $('.sofax-testimonial-2column-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      adaptiveHeight: true,
      infinite: false,
      useTransform: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
      prevArrow: '<button class="slide-arrow sofax-t-next"></button>',
      nextArrow: '<button class="slide-arrow sofax-t-prev"></button>'
    });
    $('.sofax-testimonial-slider-nav').on('init', function (event, slick) {
      $('.sofax-testimonial-slider-nav .slick-slide.slick-current').addClass('is-active');
    }).slick({
      slidesToShow: 7,
      slidesToScroll: 7,
      dots: false,
      focusOnSelect: false,
      infinite: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }]
    });
    $('.sofax-testimonial-2column-slider').on('afterChange', function (event, slick, currentSlide) {
      $('.sofax-testimonial-slider-nav').slick('slickGoTo', currentSlide);
      var currrentNavSlideElem = '.sofax-testimonial-slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
      $('.sofax-testimonial-slider-nav .slick-slide.is-active').removeClass('is-active');
      $(currrentNavSlideElem).addClass('is-active');
    });
    $('.sofax-testimonial-slider-nav').on('click', '.slick-slide', function (event) {
      event.preventDefault();
      var goToSingleSlide = $(this).data('slick-index');
      $('.sofax-testimonial-2column-slider').slick('slickGoTo', goToSingleSlide);
    });
    /*--------------------------------------------------------------
    sofax PRICING TABLE JS INIT
    ------------------------------------------------------------*/
    // Table BTN Trigger
    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");
      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
      } else {
        $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
      }
    });
    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");
      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {}); // End window LODE

  /*--------------------------------------------------------------
  sofax MAP JS
  ------------------------------------------------------------*/
  var google_map = $('#map');
  if (google_map.is_exist()) {
    var init = function init() {
      var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        disableDefaultUI: true,
        center: new google.maps.LatLng(40.6700, -73.9400),
        styles: [{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f7f1df"
          }]
        }, {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#d0e3b4"
          }]
        }, {
          "featureType": "landscape.natural.terrain",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.business",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi.medical",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fbd3da"
          }]
        }, {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [{
            "color": "#bde6ab"
          }]
        }, {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road",
          "elementType": "labels",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffe15f"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#efd151"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#ffffff"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "black"
          }]
        }, {
          "featureType": "transit.station.airport",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#cfb2db"
          }]
        }, {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
            "color": "#a2daf2"
          }]
        }]
      };
      var mapElement = document.getElementById('map');
      var map = new google.maps.Map(mapElement, mapOptions);
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        // icon: 'assets/images/all-img/contact/map.png',
        title: 'fugu'
      });
      var contentString = '<div id="content">' + '<div id="tpw">' + '<h3>fugu' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 280
      });
      marker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(function () {
        marker.setAnimation(null);
      }, 750); //time it takes for one bounce   

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
      });
    };
    google.maps.event.addDomListener(window, 'load', init);
  }

  //foodko wow js
  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();

  // AOS.init({
  //   duration: 1200,
  // })
})(jQuery);

/*--auto-slider-section--start*/

$('.foodko-text-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 8000,
  arrows: false,
  pauseOnHover: false,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1199,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

/*--auto-slider-section--start*/

$('.testimonial-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: false,
  autoplaySpeed: 0,
  arrows: false,
  infinite: false,
  speed: 300,
  // centerMode: true,
  responsive: [{
    breakpoint: 1399,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 3
    }
  }]
});
$('.testimonial-slider .slick-dots li button').on('click', function () {
  $('.foodko-testimonial-wrap').removeClass('active');
  var index = $(this).parent().index();
  $('.foodko-testimonial-wrap').eq(index).addClass('active');
});

/*--- testimonial-SLIDER END---*/

/*--- COUNTER-SLIDER START---*/
var foodko_counter = $('#foodko-counter');
if (foodko_counter.is_exist()) {
  var a = 0;
  $(window).scroll(function () {
    var oTop = $(foodko_counter).offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.foodko-counter').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-percentage');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 4000,
          easing: 'swing',
          step: function step() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function complete() {
            $this.text(this.countNum);
          }
        });
      });
      a = 1;
    }
  });
}
/*--- COUNTER-SLIDER END---*/