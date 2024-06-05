"use strict";

(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  
  1.TOP STICKY-MENU SECTION JS INIT
  2.ACCORDION SECTION JS INIT
  3.SKILLBAR SECTION JS INIT
  4.TEXT SLIDER  SECTION JS INIT
  5.CENTER SLIDER  SECTION JS INIT
  6.COUNTER SLIDER SECTION JS INIT
  7. TESTIMONIAL SLIDER 1 SECTION JS INIT
  8.PORTFOLIO-SECTION ISOTOP JS INIT
  9.TESTIMONIAL SLIDER 3 SECTION JS INIT
  10.DATE AND TIMEPICKER SECTION JS INIT
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };
  $(function () {
    /*--------------------------------------------------------------
    STICKY MENU JS INIT
    --------------------------------------------------------------*/

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function updateProgress() {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - scroll * pathLength / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });

    /*--------------------------------------------------------------
    TOP STICKY-MENU SECTION JS INIT
    --------------------------------------------------------------*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });

    /*--------------------------------------------------------------
     TOP STICKY-MENU SECTION JS INIT
      --------------------------------------------------------------*/

    /*--------------------------------------------------------------
     ACCORDION SECTION JS INIT
      --------------------------------------------------------------*/
    $(document).ready(function () {
      $('.foodko-accordion-header').on('click', function () {
        var $accordionItem = $(this).closest('.foodko-accordion-item');
        var $accordionBody = $accordionItem.find('.foodko-accordion-body');

        // Close all other accordion items
        $('.foodko-accordion-item').not($accordionItem).removeClass('open').find('.foodko-accordion-body').slideUp();

        // Toggle the clicked accordion item
        $accordionBody.slideToggle();
        $accordionItem.toggleClass('open');
      });
    });
    /*--------------------------------------------------------------
     ACCORDION SECTION JS INIT
      --------------------------------------------------------------*/

    /*--------------------------------------------------------------
      SKILLBAR SECTION JS INIT
      --------------------------------------------------------------*/
    $(document).ready(function () {
      startAnimation();
      function startAnimation() {
        jQuery('.skillbar').each(function () {
          jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
          }, 6000);
        });
      }
    });

    /*--------------------------------------------------------------
    SKILLBAR SECTION JS INIT
    --------------------------------------------------------------*/

    /*--------------------------------------------------------------
    TEXT SLIDER  SECTION JS INIT
    --------------------------------------------------------------*/
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
          slidesToShow: 2,
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
    /*--------------------------------------------------------------
    TEXT SLIDER  SECTION JS INIT
    --------------------------------------------------------------*/

    /*--------------------------------------------------------------
     CENTER SLIDER  SECTION JS INIT
      --------------------------------------------------------------*/
    $('.center-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      arrows: false,
      dots: true,
      speed: 300,
      centerPadding: '20px',
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      responsive: [{
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
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

    /*--------------------------------------------------------------
      CENTER SLIDER SECTION JS INIT
      --------------------------------------------------------------*/

    /*--------------------------------------------------------------
     COUNTER SLIDER SECTION JS INIT
     --------------------------------------------------------------*/
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

    /*--------------------------------------------------------------
     COUNTER SLIDER SECTION JS INIT
     --------------------------------------------------------------*/

    /*--------------------------------------------------------------
      TESTIMONIAL SLIDER 1 SECTION JS INIT
      --------------------------------------------------------------*/
    $('.testimonial-slider-1').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
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
    /*--------------------------------------------------------------
    TESTIMONIAL SLIDER 1 SECTION JS INIT
    --------------------------------------------------------------*/

    /*--------------------------------------------------------------
    PORTFOLIO-SECTION ISOTOP JS INIT
    --------------------------------------------------------------*/
    // init Isotope
    var $grid = $('.portfolio-items').isotope({
      // options
    });
    // filter items on menu click
    $('.portfolio-menu').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });
    $('.portfolio-menu').on('click', 'li', function () {
      $(this).addClass('active').siblings().removeClass('active');
    });

    /*--------------------------------------------------------------
    PORTFOLIO-SECTION ISOTOP JS INIT
    --------------------------------------------------------------*/

    /*--------------------------------------------------------------
    TESTIMONIAL SLIDER 3 SECTION JS INIT
    --------------------------------------------------------------*/

    $('.foodko-slider-4').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 300,
      speed: 300,
      arrows: false,
      dots: false,
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
  }); /*End document ready*/

  $(window).on("load", function () {}); // End window LODE

  //foodko wow js
  var wow = new WOW({
    mobile: false,
    tablet: false
  });
  wow.init();
})(jQuery);