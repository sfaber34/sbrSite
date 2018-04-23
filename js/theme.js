
var promptFlag=0;
$(function () {
    "use strict";



    $(window).load(function () {

        // SITE PRELOADER                     ||-----------

        $('#loader').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
        clickPrompt();
    })


    // ---------------------------------------------------------------------------------------------------------------------------->
    // GENERAL SCRIPTS FOR ALL PAGES    ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->

    $(document).ready(function () {
        stickHeader();
        int_introHeight();
        scroll();
        sliderAll();
        equalHeight();
        quickNav();
        actionType();
        // scrollCallbackEle();
    });


    $(window).resize(function () {
        stickHeader();
        int_introHeight();
        equalHeight();
        setQuickNavPos();
    })


    $(window).scroll(function () {
        stickHeader();
        setQuickNavPos();
        clickPrompt();
    });





    // ---------------------------------------------------------------------------------------------------------------------------->
    // SCROLL FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->

    // function scroll() {
    //
    //     $('.scroll-top').click(function () {
    //         $('html, body').animate({ scrollTop: 0 }, 800);
    //         return false;
    //     });
    //
    //     // Scroll Down Elements
    //     $('.scroll-down[href^="#"], .scroll-to-target[href^="#"]').on('click', function (e) {
    //         e.preventDefault();
    //
    //         var target = this.hash;
    //         var $target = $(target);
    //
    //         $('html, body').stop().animate({
    //             'scrollTop': $target.offset().top
    //         }, 900, 'swing', function () {
    //             window.location.hash = target;
    //         });
    //     });
    //
    // };


    // ---------------------------------------------------------------------------------------------------------------------------->
    // STICKY HEADER FUNCTIONS   ||-----------
    // ---------------------------------------------------------------------------------------------------------------------------->
    function stickHeader() {

        var scrolled = $(window).scrollTop();
        var windHeight = $(window).height();
        if (scrolled > 40) {
            $('.headerDynamic').addClass('header-prepare');
        } else {
            $('.headerDynamic').removeClass('header-prepare');
        }

        if (scrolled > 1) {
            $('.headerDynamic').addClass('header-fixed');
        } else {
            $('.headerDynamic').removeClass('header-fixed');
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
    // function scrollCallbackEle() {
    //     //scroll Callback Element
    //     $('.load-ele-fade').viewportChecker({
    //         classToAdd: 'visible animated fadeIn',
    //         offset: 100,
    //         callbackFunction: function (elem, action) {
    //         }
    //     });
    //
    //     $(function () {
    //
    //         //scroll Animate Element
    //         var wow = new WOW({
    //             boxClass: 'wow',
    //             animateClass: 'animated',
    //             offset: 0,
    //             mobile: false,
    //             live: true
    //         })
    //         wow.init();
    //     });
    // };


    // ----------------------------------------------------------------
    // Parallax Function element
    // ----------------------------------------------------------------

    // Parallax Function element
    // $('.parallax').each(function () {
    //     var $el = $(this);
    //     $(window).scroll(function () {
    //         parallax($el);
    //     });
    //     parallax($el);
    // });
    //
    //
    // function parallax($el) {
    //     var diff_s = $(window).scrollTop();
    //     var parallax_height = $('.parallax').height();
    //     var yPos_p = (diff_s * 0.5);
    //     var yPos_m = -(diff_s * 0.5);
    //     var diff_h = diff_s / parallax_height;
    //
    //     if ($('.parallax').hasClass('parallax-section1')) {
    //         $el.css('top', yPos_p);
    //     }
    //     if ($('.parallax').hasClass('parallax-section2')) {
    //         $el.css('top', yPos_m);
    //     }
    //     if ($('.parallax').hasClass('parallax-static')) {
    //         $el.css('top', (diff_s * 1));
    //     }
    //     if ($('.parallax').hasClass('parallax-opacity')) {
    //         $el.css('opacity', (1 - diff_h * 1));
    //     }
    //
    //     if ($('.parallax').hasClass('parallax-background1')) {
    //         $el.css("background-position", 'left' + " " + yPos_p + "px");
    //     }
    //     if ($('.parallax').hasClass('parallax-background2')) {
    //         $el.css("background-position", 'left' + " " + -yPos_p + "px");
    //
    //     }
    // };

    // var parallaxPositionProperty;
    // if ($(window).width() >= 1024) {
    //     parallaxPositionProperty = "position";
    // } else {
    //     parallaxPositionProperty = "transform";
    // }
    //
    // // Parallax Stellar Plugin element
    // $('body').stellar({
    //     responsive: true,
    //     positionProperty: parallaxPositionProperty,
    //     horizontalScrolling: false
    //
    // });



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
      var tagButtons = $(this).closest('.tagFilterCont').find('.tagFilter');
      var tagFilter=$(this).attr('tagFilter');

      $(tagButtons).removeClass('tagSelected');
      $(this).addClass('tagSelected');

      $(tags).hide();

      if (tagFilter == 'All'){
        $(tags).show();
      }else{
        for (var i=0; i<tags.length; i++){
          var tagVal=$(tags[i]).attr('tags');
          if (tagVal.includes(tagFilter)){
            $(tags[i]).show();
          }
        }
      }

    });

    $('.manuLink').click(function(e){
      e.preventDefault();
      var termB = '';
      if ($(this).hasClass('wineLink')){termB = ' Wine'}
      if ($(this).hasClass('beerLink')){termB = ' Beer'}
      if ($(this).hasClass('whiskeyLink')){termB = ' Whiskey'}
      if ($(this).hasClass('vodkaLink')){termB = ' Vodka'}
      if ($(this).hasClass('tequilaLink')){termB = ' Tequila'}
      if ($(this).hasClass('ginLink')){termB = ' Gin'}
      var searchTerm = $(this).html();
      var win = window.open('https://www.google.com/search?q='+searchTerm+termB+'&btnI', '_blank');
      win.focus();
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

function equalHeight(){
  var targets = $(".equalHeight");
  $(targets).css('min-height','');
  var maxHeight = 0;
  for (var i=0; i<targets.length; i++){
    var thisHeight = $(targets[i]).height();
    if (thisHeight > maxHeight){maxHeight = thisHeight}
  }

  $(targets).css('min-height',maxHeight+12);
}

function quickNav(){
  if($('.quickNav').length){
    $('.quickNav').hide();
    $('#quickNavButton').click(function(){
      $('#quickHelpButton').fadeOut(300);
      $('#quickNavButton').fadeOut(300,function(){
        $('.quickNav').fadeIn(550);
      });

    });
    $('.closeQuickNav').click(function(){
      $('.quickNav').fadeOut(200,function(){
        $('#quickNavButton').fadeIn(350);
        $('#quickHelpButton').fadeIn(350);
      });
    });

    $('.quickNavLink').click(function(){
      var target = $(this).attr('id');

      $('html, body').animate({
        scrollTop: $('#'+target+'Img').offset().top-62
      }, 1000);
    });


  }
}

function setQuickNavPos(){
  if($('.quickNav').length){
  if($('#endOfPage').visible()){
    var distance = $('#endOfPage').offset().top - $(document).scrollTop();
    var quickNavHeight = $('.quickNav').height();
    $('#quickNavButton').css('top',distance-142);
    $('#quickHelpButton').css('top',distance-72);
    $('.quickNav').css('top',distance-quickNavHeight);
  }else{
    $('#quickNavButton').css('top','').css('bottom','80px');
    $('#quickHelpButton').css('top','').css('bottom','10px');
    $('.quickNav').css('top','').css('bottom','0px');
  }
}
}

function clickPrompt(){
  if($('#clickPromptTarget').visible() && promptFlag==0){
    promptFlag=1;
    $('.clickPrompt').fadeIn(500, function() {
      $('.clickPrompt').delay(2000).fadeOut(500);
    });
  }
}

function actionType(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.action').html('Tap');
    $('.actionTense').html('Tapping');
  } else{
    $('.action').html('Click');
    $('.actionTense').html('Clicking');
  }
}
