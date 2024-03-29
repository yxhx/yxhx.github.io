/*

	Movie Me Main Java Script

	- - - - - Contents - - - - -
	
	01 - Basic Java Script
	02 - Animate Number Plugin
	03 - Features Percentage
	04 - Accordion
	05 - Video Content BG Center Image
	06 - Owl Slider
	07 - Video container (You Tube)
	08 - Media Buttons
	09 - Flipclock
	10 - Movie Player Dumpers
	11 - Popup Windows
	12 - Waypoints (Parallax)
	
	- - - - - - - - - - - - - -
	
*/	


/* 01 - Basic Java Script
-----------------------------------------------------------*/

// jQuery to collapse the navbar on scroll

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);  
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Rotate JS

var deg = 0;
window.setInterval(function() {
    deg += 1;
    $(".rotate").css('-webkit-transform','rotate(' + deg + 'deg)');
}, 25);





/* 04 - Accordion
-----------------------------------------------------------*/

$('.collapse').on('shown.bs.collapse', function(){
$(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function(){
$(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});

// clear text area

function eraseText() {
    document.getElementById("comment-text-area").value = "";
}


/* 05 - Video Content BG Center Image
-----------------------------------------------------------*/

$(window).load(function()
{
	centerContent();
});

$(window).resize(function()
{
	centerContent();
});

function centerContent()
{
	var container = $('.video-image');
	var content = $('.video-image img');
	content.css("left", (container.width()-content.width())/2);
	content.css("top", (container.height()-content.height())/2);
}


/* 06 - Owl Slider
-----------------------------------------------------------*/

// Owlslider Intro

	$("#owl-intro").owlCarousel({
	      navigation : true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
		  

			//Pagination
			pagination : true
	  });



// Owlslider Team


    var owl = $("#owl-actors");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 2],
				[600, 2],
				[700, 2],
				[1000, 3],
				[1200, 3],
				[1400, 3],
				[1600, 3]
				],
				navigation : true,
				pagination : true,
				mouseDrag: true
		});



// Owlslider Gallety

    var owl = $("#owl-gallery");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 1],
				[700, 1],
				[1000, 2],
				[1200, 3],
				[1400, 3],
				[1600, 3]
				],
				navigation : true,
				pagination : true,
				afterInit : function(elem){
				  var that = this
				  that.owlControls.prependTo(elem)
				}
		});


// Owlslider Reviews


	$("#owl-reviews").owlCarousel({
      navigation : true,
	  pagination: true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true
	  });


// Owlslider Blog Section


	$("#owl-blog").owlCarousel({
      navigation : true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true,
		  

	  //Pagination
	  pagination : true
	  });




/* 08 - Media Buttons
-----------------------------------------------------------*/

// Onclick Java Script


	
	$(".play-btn").on('click', function() {
	   $(this).hide();
	   $('.video-image').css('display', 'none');
	   $('.video-container #player').css('display', 'inline-block');
	   $(".pause-btn").show();
	   $('.about-btn').css('display', 'none');
	   $('.pause-btn').css('display', 'inline-block');
   	   $('.media-btns').css('margin-top', '440px');
	   $('.intro-info-wrapper').css('display', 'none');
	   $('.video-content .overlay').css('background', 'none');
	});

	$(".pause-btn").on('click', function() {
	   $(this).hide();
	   $(".play-btn").show();
	   $('.video-container #player').hide();
	   $('.video-image').css('display', 'block');
   	   $('.about-btn').css('display', 'inline-block');
   	   $('.play-btn').css('display', 'inline-block');
	   $('.intro-info-wrapper').css('display', 'block');
  	   $('.media-btns').css('margin-top', '0px');
	   $('.video-content .overlay').css('background', 'rgba(255,255,255,0.7) url(img/overlay-pat.png)');
	   $('.video-container #player').css('display', 'none');
	});


$(document).ready(function(){
	   $(".play-btn").show();
	   $('.video-container #player').hide();
	   $('.video-image').css('display', 'block');
   	   $('.about-btn').css('display', 'inline-block');
   	   $('.play-btn').css('display', 'inline-block');
	   $('.intro-info-wrapper').css('display', 'block');
  	   $('.media-btns').css('margin-top', '0px');
	   $('.video-content .overlay').css('background', 'rgba(255,255,255,0.7) url(img/overlay-pat.png)');
	   $('.video-container #player').css('display', 'none');
	   
	   
	   
});


/* 09 - Flipclock
-----------------------------------------------------------*/



/* 10 - Movie Player Dumpers
-----------------------------------------------------------*/


	$('#movie-player').appear(function() {
	$(".damper-left").css('width','0px');
	$(".damper-right").css('width','0px');
	},{accX: 0, accY: -200});



/* 11 - Popup Windows
-----------------------------------------------------------*/

$('.popup').magnificPopup({ 
	type: 'image',
	fixedContentPos: false,
	    gallery: {
      enabled: true
    },

	fixedBgPos: false,

	  removalDelay: 800,
	   mainClass: 'mfp-fade'

});

// Popup for soundcloud

$('.popup-soundcloud').magnificPopup({ 
	type: 'iframe',
	mainClass: 'soundcloud-popup'
});

// Popup for videos and google maps

$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	fixedContentPos: false,
	fixedBgPos: false,
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false
});

// Popup for a normal inline element

$('.popup-inline').magnificPopup({
	type: 'inline'
});

// Popup for a project with rich content

$('.popup-project').magnificPopup({
	type: 'inline',
	alignTop: true
});

// Popup for an ajax popup without rich content

$('.popup-ajax').magnificPopup({
	type: 'ajax',
	alignTop: true
});

// no-touch animation

if($('html').hasClass('no-touch')){
	$('.gallery-item, .item-thumbnail').hover(function(){
		$(this).siblings().addClass('fade');
	}, function(){
		$(this).siblings().removeClass('fade');
	});
}


/* 12 - Waypoints (Parallax)
-----------------------------------------------------------*/


	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	
	
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});	
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp7').waypoint(function() {
		$('.wp7').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp8').waypoint(function() {
		$('.wp8').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});
	$('.wp9').waypoint(function() {
		$('.wp9').addClass('animated fadeInDown');
	}, {
		offset: '100%'
	});
	$('.wp10').waypoint(function() {
		$('.wp10').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});
	$('.wp11').waypoint(function() {
		$('.wp11').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
