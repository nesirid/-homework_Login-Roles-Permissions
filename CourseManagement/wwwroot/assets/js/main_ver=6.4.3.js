/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Sidebar Js
04. Cart Toggle Js
05. Search Js
06. Sticky Header Js
07. Data Background Js
08. Testimonial Slider Js
09. Slider Js (Home 3)
10. Brand Js
11. Tesimonial Js
12. Cor Slider Js
13. Masonary Js
14. Wow Js
15. Data width Js
16. Cart Quantity Js
17. Show Login Toggle Js
18. Show Coupon Toggle Js
19. Create An Account Toggle Js
20. Shipping Box Toggle Js
21. Counter Js
22. Parallax Js
23. InHover Active Js

****************************************************/

(function ($) {
"use strict";

	var windowOn = $(window);
	// Activate rtl slider
    let rtl_setting = $('body').hasClass("rtl") ? true : false;
	////////////////////////////////////////////////////
    // 01. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);
	});
	////////////////////////////////////////////////////
    // 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	// menu-last class
	$(".main-menu nav > ul > li").slice(-4).addClass("menu-last");


	////////////////////////////////////////////////////
    // 03. Sidebar Js
	$("#sidebar-toggle").on("click", function () {
		$(".sidebar-area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar-close-btn").on("click", function () {
		$(".sidebar-area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 04. Cart Toggle Js
	$(".cart-toggle-btn--").on("click", function () {
		$(".cartmini-wrapper").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini-wrapper").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});
	$(".body-overlay").on("click", function () {
		$(".cartmini-wrapper").removeClass("opened");
		$(".sidebar-area").removeClass("sidebar-opened");
		$(".header-search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".header-search-3").addClass("search-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".header-search-3-btn-close").on("click", function () {
		$(".header-search-3").removeClass("search-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
    // 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

	////////////////////////////////////////////////////
    // Cor sidebar Js
	$(".cor-sidebar-widget .tutor-list-item,.cor-sidebar-search button, .cor-sidebar-widget .tutor-cor-filter-nested-terms, .tutor-clear-all-filter").on("click", function () {
		$("body").removeClass("tutor-cor-filter-open");
	});


	$(".tutor-cor-filter .tutor-cor-close").click(function(){
		$("body").removeClass("tutor-cor-filter-open");
	});


	////////////////////////////////////////////////////
    // 07. Data-Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-top-space]").each(function () {
		$(this).css("padding-top", $(this).attr("data-top-space"));
	});
  
	////////////////////////////////////////////////////
    // 08. Testimonial Slider Js

    function testSlider() {

    var swiper = new Swiper('.testimonial-slider', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		rtl: rtl_setting,
	});

	////////////////////////////////////////////////////
    // 11. Tesimonial Js
	var tesimonialThumb = new Swiper('.testimonial-nav', {
		spaceBetween: 20,
		slidesPerView: 3,
		rtl: rtl_setting,
		loop: true,
		freeMode: true,
		loopedSlides: 3, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
	  });
	var testimonialText = new Swiper('.testimonial-text', {
	spaceBetween: 0,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: tesimonialThumb,
	},
	});

    }
	


	////////////////////////////////////////////////////
    // 09. Slider Js (Home 3)
    function heroSlider() {

   $("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	}); 	

	var galleryThumbs = new Swiper('.slider-nav', {
		spaceBetween: 0,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		rtl: rtl_setting,
		watchSlidesProgress: true,
		
	});
	var galleryTop = new Swiper('.slider-wrapper', {
		spaceBetween: 0,
		effect: 'fade',
		loop: true,
		rtl: rtl_setting,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});

	}

	function brandSlider() {

	////////////////////////////////////////////////////
    // 10. Brand Js
	var swiper = new Swiper('.brand-slider', {
		slidesPerView: 6,
		spaceBetween: 30,
		rtl: rtl_setting,
		centeredSlides: true,
		loop: true,
		breakpoints: {  
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 4,
			},
			'0': {
				slidesPerView: 3,
			},
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	}


	////////////////////////////////////////////////////
   	// 12. Cor Slider Js
	var swiper = new Swiper('.cor-slider', {
	spaceBetween: 30,
	rtl: rtl_setting,
	slidesPerView: 2,
	breakpoints: {  
		'768': {
			slidesPerView: 2,
		},
		'576': {
			slidesPerView: 1,
		},
		'0': {
			slidesPerView: 1,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	});

	////////////////////////////////////////////////////
   	// 12. Cor Slider Js
	var swiper = new Swiper('.product-active', {
		slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: false,
		rtl: rtl_setting,
		loop: false,
		breakpoints: {  
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: '.product-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.product-button-next',
			prevEl: '.product-button-prev',
		},
	});


	////////////////////////////////////////////////////
  	// 10. blgo gallery active Js
	$('.post_gallery').owlCarousel({
		autoplay:true,
		autoplayTimeout:3000,
		smartSpeed:500,
		items:1,
		rtl: rtl_setting,
		navText:['<button><i class="fa fa-angle-left"></i></button>','<button><i class="fa fa-angle-right"></i></button>'],
		nav:true,
		dots:false,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			767:{
				items:1
			},
			992:{
				items:1
			},
			1200:{
				items:1
			},
			1600:{
				items:1
			}
		}
	});


  //Elementor view
  $(window).on("elementor/frontend/init", function () {

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/slider.default",heroSlider
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/testimonial_slider.default",testSlider
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/brand.default",brandSlider
    );

  });



	
	////////////////////////////////////////////////////
    // 13. Masonary Js
	$('.grid').imagesLoaded( function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item',
		  }
		});


	// filter items on button click
	$('.masonary-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	//for menu active class
	$('.masonary-menu button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});

	});


	////////////////////////////////////////////////////
    // 14. Wow Js
	// new WOW().init();

	////////////////////////////////////////////////////
    // 15. Data width Js
	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	  });
	

	////////////////////////////////////////////////////
    // 16. Cart Quantity Js
	$('.cart-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.cart-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});




	////////////////////////////////////////////////////
	// 17. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 18. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 19. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 20. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	////////////////////////////////////////////////////
	// 22. Parallax Js
	if ($('.scene').length > 0 ) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		}); 
	};

	////////////////////////////////////////////////////
    // 23. InHover Active Js
	$('.hover-active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover-active').removeClass('active');
	});

	// nice select
   // $(".footer-widget select,.sidebar-widget  select,.tutor-cor-filter-form  select").niceSelect();


    // cart-plus-minus
    $(".cart-plus-minus").append('<div class="qtybutton minus">-</div><div class="qtybutton plus">+</div>');

    $(".cart-plus-minus").on("click", ".qtybutton.plus, .qtybutton.minus", function () {
        // Get current quantity values
        var qty = $(this).closest(".cart-plus-minus").find(".qty");
        var val = parseFloat(qty.val());
        var max = parseFloat(qty.attr("max"));
        var min = parseFloat(qty.attr("min"));
        var step = parseFloat(qty.attr("step"));

        // Change the value if plus or minus
        if ($(this).is(".plus")) {
            if (max && max <= val) {
                qty.val(max);
            }
            else {
                qty.val(val + step).trigger("change");
            }
        }
        else {
            if (min && min >= val) {
                qty.val(min);
            }
            else if (val > 1) {
                qty.val(val - step).trigger("change");
            }
        }
    });

})(jQuery);