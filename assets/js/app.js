"use strict";

/*----arrow-top-- start-*/

(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  
  
  
  -------------------------------------------------------------------*/

  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  };

  /* top sticky-menu start*/
  $(function () {
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('#sticky-menu').addClass('sticky-menu');
      } else {
        $('#sticky-menu').removeClass('sticky-menu');
      }
    });
    /* top sticky-menu end*/

    /* ACCORDION START*/
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
    /* ACCORDION END*/

    /* skillbar start*/
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

    /* skillbar end*/

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

    /*-testimonial-slider-2 centermode--start*/

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
    /*-testimonial-slider-2 centermode--end*/

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
    STICKY MENU JS INIT
    --------------------------------------------------------------*/

    /*--PORTFOLIO-SECTION --ISOTOP START --*/

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

    /*-PORTFOLIO-SECTION --ISOTOP END --*/

    /*-testimonial-slider-3-start*/
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

    /*-testimonial-slider-3-end*/

    // Get the input fields and the calendar icon
    var dateInputField = document.getElementById('datepicker');
    var timeInputField = document.getElementById('timepicker');

    // Function to set current date and time when the input fields are clicked
    dateInputField.addEventListener('click', function () {
      this.type = 'date';
      this.focus();
    });
    timeInputField.addEventListener('click', function () {
      this.type = 'time';
      this.focus();
    });

    // If the user manually enters a date or time, change the input type to text
    dateInputField.addEventListener('change', function () {
      if (this.value !== '') {
        this.type = 'text';
      }
    });
    timeInputField.addEventListener('change', function () {
      if (this.value !== '') {
        this.type = 'text';
      }
    });
  }); /*End document ready*/

  $(window).on("resize", function () {}); // end window resize

  $(window).on("load", function () {}); // End window LODE

  //foodko wow js
  var wow = new WOW({
    mobile: false,
    // default
    tablet: false
  });
  wow.init();
})(jQuery);

/*----arrow-top-- end-*/