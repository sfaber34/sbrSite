

$(function () {
    "use strict";



    $(window).load(function () {

        // SITE PRELOADER                     ||-----------

        $('#loader').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    })


    // ---------------------------------------------------------------------------------------------------------------------------->
    // GENERAL SCRIPTS FOR ALL PAGES    ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->

    $(document).ready(function () {
        stickHeader();
        int_introHeight();
        scroll();
        sliderAll();
        scrollCallbackEle();
    });


    $(window).resize(function () {
        stickHeader();
        int_introHeight();
    })


    $(window).scroll(function () {
        stickHeader();
    });





    // ---------------------------------------------------------------------------------------------------------------------------->
    // SCROLL FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->

    function scroll() {

        $('.scroll-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

        // Scroll Down Elements
        $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

    };


    // ---------------------------------------------------------------------------------------------------------------------------->
    // STICKY HEADER FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->
    function stickHeader() {

        var scrolled = $(window).scrollTop();
        var windHeight = $(window).height();
        if (scrolled > 40) {
            $('.header').addClass('header-prepare');
        } else {
            $('.header').removeClass('header-prepare');
        }

        if (scrolled > 1) {
            $('.header').addClass('header-fixed');
        } else {
            $('.header').removeClass('header-fixed');
        }
    };

    // ----------------------------------------------------------------
    // Intro Height
    // ----------------------------------------------------------------
    function int_introHeight() {
        var windiwHeight = $(window).height();
        // Intro Height
        $('.js-fullscreen-height').css('height', windiwHeight);
    };

    // ----------------------------------------------------------------
    // Backgrounds Image (Slider, Section, etc..)
    // ----------------------------------------------------------------
    var pageSection = $('.slide-bg-image, .bg-image');
    pageSection.each(function (indx) {

        if ($(this).attr("data-background-img")) {
            $(this).css("background-image", "url(" + $(this).data("background-img") + ")");
        }
    });


    // ---------------------------------------------------------------------------------------------------------------------------->
    // SLIDER FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->

    function sliderAll() {

        // Testimonial Slider
        $('.testimonial-carousel').owlCarousel({
            autoPlay: 9000,
            autoHeight: true,
            mouseDrag: false,
            stopOnHover: false,
            singleItem: true,
            slideSpeed: 800,
            pagination: false,  // Show pagination buttons
            navigation: false,  // Hide next and prev buttons
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            //  responsive: true
        });


    };

    // ---------------------------------------------------------------------------------------------------------------------------->
    // SCROLL CALLBACK FUNCTION  ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->
    function scrollCallbackEle() {
        //scroll Callback Element
        $('.load-ele-fade').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 100,
            callbackFunction: function (elem, action) {
            }
        });

        $(function () {

            //scroll Animate Element
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true
            })
            wow.init();
        });
    };


    // ----------------------------------------------------------------
    // Parallax Function element
    // ----------------------------------------------------------------

    // Parallax Function element
    $('.parallax').each(function () {
        var $el = $(this);
        $(window).scroll(function () {
            parallax($el);
        });
        parallax($el);
    });


    function parallax($el) {
        var diff_s = $(window).scrollTop();
        var parallax_height = $('.parallax').height();
        var yPos_p = (diff_s * 0.5);
        var yPos_m = -(diff_s * 0.5);
        var diff_h = diff_s / parallax_height;

        if ($('.parallax').hasClass('parallax-section1')) {
            $el.css('top', yPos_p);
        }
        if ($('.parallax').hasClass('parallax-section2')) {
            $el.css('top', yPos_m);
        }
        if ($('.parallax').hasClass('parallax-static')) {
            $el.css('top', (diff_s * 1));
        }
        if ($('.parallax').hasClass('parallax-opacity')) {
            $el.css('opacity', (1 - diff_h * 1));
        }

        if ($('.parallax').hasClass('parallax-background1')) {
            $el.css("background-position", 'left' + " " + yPos_p + "px");
        }
        if ($('.parallax').hasClass('parallax-background2')) {
            $el.css("background-position", 'left' + " " + -yPos_p + "px");

        }
    };

    var parallaxPositionProperty;
    if ($(window).width() >= 1024) {
        parallaxPositionProperty = "position";
    } else {
        parallaxPositionProperty = "transform"
    }

    // Parallax Stellar Plugin element
    $(window).stellar({
        responsive: true,
        positionProperty: parallaxPositionProperty,
        horizontalScrolling: false

    });



    // Accordion Function Elements
    accordion();
    function accordion() {

        $('.accordion-title').click(function (e) {

            $(this).next().slideToggle('easeOut');
            $(this).toggleClass('active');
            $("accordion-title").toggleClass('active');
            $(".accordion-content").not($(this).next()).slideUp('easeIn');
            $(".accordion-title").not($(this)).removeClass('active');

        });
        $(".accordion-content").addClass("defualt-hidden");

    };

    // Jquery UI Elements
    jqueryUi();
    function jqueryUi() {

        // Tab Function
        $(function () {
            $(".tabs").tabs();
        });

        // Price Filter Slider
        $(function () {
            $("#range-slider").slider({
                range: true,
                min: 0,
                max: 500,
                values: [0, 300],
                slide: function (event, ui) {
                    $(".price-amount-from").text("$" + ui.values[0]);
                    $(".price-amount-to").text("$" + ui.values[1]);

                }
            });
            $(".price-amount-from").text("$" + $("#range-slider").slider("values", 0));
            $(".price-amount-to").text("$" + $("#range-slider").slider("values", 1));
        });
    };

    $('.tagFilter').click(function(){
      var tags = $(this).closest('.tagContainer').find('.tagHolder');
      var tagFilter=$(this).attr('tagFilter');
      $(tags).hide();
      for (var i=0; i<tags.length; i++){
        var tagVal=$(tags[i]).attr('tags');
        if (tagVal.includes(tagFilter)){
          $(tags[i]).show();
        }
      }
    });

    var now = new Date();
    var currentDay = now.getDay();
    if (currentDay == 0){
      var element = document.getElementById("day0");
    } else if(currentDay > 0 && currentDay < 5){
      var element = document.getElementById("day1");
    }else{
      var element = document.getElementById("day2");
    }
    element.classList.add("currentDay");
});

function launchMap() {
  if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") != -1) ||
     (navigator.platform.indexOf("iPod") != -1) ||
     (navigator.platform.indexOf("iPad") != -1))
    window.open("http://maps.apple.com/?daddr=south+boulder+road+liquor+lafayette+co");

  else /* else use Google */
    window.open("https://www.google.com/maps/dir/?api=1&query=south+boulder+road+liquor+lafayette+co&destination=south+boulder+road+liquor+lafayette+co");
}
