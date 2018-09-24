

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

var promptFlag=0;
$(function () {
    "use strict";



    $(window).load(function () {

        // SITE PRELOADER                     ||-----------

        $('#loader').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
        clickPrompt();
        manuLinks();
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
        int_nav_menu_height();
        // scrollCallbackEle();
    });


    $(window).resize(function () {
        stickHeader();
        int_introHeight();
        equalHeight();
        setQuickNavPos();
        int_nav_menu_height();
    })


    $(window).scroll(function () {
        stickHeader();
        setQuickNavPos();
        clickPrompt();
    });


    // ----------------------------------------------------------------
    // Navigation Menu panel
    // ----------------------------------------------------------------
    var mobile_menu_icon = $(".nav-mobile");
    var mobile_menu = $(".nav-menu");

    // Mobile menu max height
    function int_nav_menu_height() {
        mobile_menu.css("max-height", $(window).height() - $(".header").height() - 20 + "px"), $(window).width() <= 1024 ? $(".header").addClass("mobile-device") : $(window).width() > 1024 && ($(".header").removeClass("mobile-device"))
    };

    // Mobile menu toggle icon
    mobile_menu_icon.click(function () {
        if (!($(this).hasClass('active'))) {
            mobile_menu_icon.addClass('active');
            mobile_menu.addClass('active');
        }
        else if ($(this).hasClass('active')) {
            mobile_menu_icon.removeClass('active');
            mobile_menu.removeClass('active');
        }
    });


    // Dropdown Sub menu
    var menu_Sub = $(".menu-has-sub");
    var menu_Sub_Li;

    $(".mobile-device .menu-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down");

    menu_Sub.click(function () {
        if ($(".header").hasClass("mobile-device")) {
            menu_Sub_Li = $(this).parent("li:first");
            if (menu_Sub_Li.hasClass("menu-opened")) {
                menu_Sub_Li.find(".sub-dropdown:first").slideUp(function () {
                    menu_Sub_Li.removeClass("menu-opened");
                    menu_Sub_Li.find(".menu-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down");
                });
            }
            else {
                $(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up");
                menu_Sub_Li.addClass("menu-opened");
                menu_Sub_Li.find(".sub-dropdown:first").slideDown();
            }
            return false;
        }
        else {
            return false;
        }
    });

    menu_Sub_Li = menu_Sub.parent("li");
    menu_Sub_Li.hover(function () {
        if (!($(".header").hasClass("mobile-device"))) {
            $(this).find(".sub-dropdown:first").stop(true, true).fadeIn("fast");
        }

    }, function () {
        if (!($(".header").hasClass("mobile-device"))) {
            $(this).find(".sub-dropdown:first").stop(true, true).delay(100).fadeOut("fast");
        }

    });


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
    $('.clickPrompt').fadeIn(400, function() {
      $('.clickPrompt').delay(2000).fadeOut(200);
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

function manuLinks(){
  var termB = '';
  $('.manuLink').each(function(){
    if ($(this).hasClass('wineLink')){termB = ' Wine'}
    if ($(this).hasClass('beerLink')){termB = ' Beer'}
    if ($(this).hasClass('ciderLink')){termB = ' Hard Cider'}
    if ($(this).hasClass('whiskeyLink')){termB = ' Whiskey'}
    if ($(this).hasClass('vodkaLink')){termB = ' Vodka'}
    if ($(this).hasClass('tequilaLink')){termB = ' Tequila'}
    if ($(this).hasClass('ginLink')){termB = ' Gin'}
    if ($(this).hasClass('spiritLink')){termB = ' Spirits'}
    var searchTerm = $(this).html();
    var win = 'https://www.google.com/search?q='+searchTerm+termB+'&btnI';
    $(this).attr("href",win).attr("target","_blank");
  })
}

var manuWarningFlag = 1;
var dest;
function manuLinkClick(e){
  dest = e.currentTarget.getAttribute("href");
  if (manuWarningFlag == 1){
    e.preventDefault();
    $("#navWarningModal").modal("show");
  } else{
    window.open(dest,'_blank');
  }
}


function navWarningModal(e){
  if (e.currentTarget.getAttribute("id") == "ok"){
    manuWarningFlag = 0;
    $("#navWarningModal").modal("hide");
    window.open(dest,'_blank');
  }else{
    $("#navWarningModal").modal("hide");
  }
}
