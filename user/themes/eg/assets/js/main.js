(function($) {

	"use strict";

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {
		var $mainMenuUl = $('#mainMenuUl');
		var $mainMenuClose = $('#mainMenuClose');
		var $page = $('.page');
		var $mainVideo = $('.main-video');
		var $content = $('#main');

    $mainMenuClose.on('click', function() {
    	$(this).toggleClass('active');
      $mainMenuUl.toggleClass('visible');
      $page.toggleClass('passive');
      $mainVideo.toggleClass('passive');
      $content.toggleClass('behind');

      if ($(this).hasClass('active')) {
        $.fn.fullpage.setAllowScrolling(false);
      }
      else {
        $.fn.fullpage.setAllowScrolling(true);
      }
		});

    $('.main-menu__link').each(function () {
      var link = $(this).text();
      var href = link.toLowerCase();
      $(this).attr('href', '#'+href);

      $(this).on('click', function () {
        $mainMenuClose.removeClass('active');
        $mainMenuUl.removeClass('visible');
        $page.removeClass('passive');
        $mainVideo.removeClass('passive');
        $content.removeClass('behind');
        $.fn.fullpage.setAllowScrolling(true);
      });
    });

    $('#fullpage').fullpage({
      //Navigation
      menu: '#mainMenuUl',
      lockAnchors: false,
      anchors:['home', 'about', 'work', 'team', 'contact'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 800,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '.dos',
      scrollOverflow: true,
      scrollOverflowReset: true,
      scrollOverflowOptions: {
        scrollbars: false,
        momentum: false,
        mouseWheel: true,
        deceleration: 0.00009,
        mouseWheelSpeed: 5
      },
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      sectionsColor : false,
      paddingTop: '5em',
      paddingBottom: '5em',
      fixedElements: '#header, .footer',
      responsiveWidth: 1024,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      lazyLoading: true,

      //events
      onLeave: function(index, nextIndex, direction){
        
      },
      afterLoad: function(anchorLink, index){
        
      },
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
	});

  $('.openModal').on('click', function (e) {
    var $openLinkUrl = $(this).attr('href');

    $('.eg-modal')
      .removeClass('active')
      .addClass('hidden');
    $($openLinkUrl)
      .addClass('active')
      .removeClass('hidden')
      .parent()
      .addClass('active')
      .removeClass('hidden');

    e.preventDefault();
    $.fn.fullpage.setAllowScrolling(false);
  });

  $('.eg-modal__close').on('click', function() {
    $('.eg-modal, .eg-modal__container')
      .removeClass('active')
      .addClass('hidden');

    $.fn.fullpage.setAllowScrolling(true);

    if ($(this).hasClass('work')) {
      $.fn.fullpage.moveTo('work');
    }
    else if ($(this).hasClass('team')) {
      $.fn.fullpage.moveTo('team');
    }
  });

})(jQuery);