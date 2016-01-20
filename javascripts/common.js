var device;
var mobileOs;
var UserAgent = navigator.userAgent;
if (UserAgent.match(/iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
     device = "m";
	 if(UserAgent.match(/iPhone|iPod|iPad|Apple/) != null){
		mobileOs = "ios";
	 }
	 if(UserAgent.match(/Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null){
		mobileOs = "android";
	 }
} else {
     device = "pc";
	 mobileOs = '';
}

var w = 0;
var ww = 0;
var mw = 0;
var h = 0;
var scrx = 0;
var scry = 0;
var ratio = 16 / 9;
var charpos = 0;

$.scrollbarWidth = function() {
  var parent, child, width;

  if(width===undefined) {
    parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');
    child=parent.children();
    width=child.innerWidth()-child.height(99).innerWidth();
    parent.remove();
  }

 return width;
};

window.onPlayerReady = function (e) {
  resizeVideo(1920,1080);
}

window.onPlayerStateChange = function (e){
	console.log(e);
  if (e.data == YT.PlayerState.ENDED){
  }
}

var mySwiperC;

var cycleDg = {
	fx:     "fade",
	speed:   300,
	timeout: 0,
	allowWrap: false,
	slideExpr: '.dungeons', 
	pager:'#dun_navs',
	prev:'#dun_prev',
	next:'#dun_next',
	pagerEvent: 'click.cycle',
	updateActivePagerLink: function(pager, activeIndex){
		$('#dun_nav').children('a').removeClass('on');
		var act = activeIndex;
		if(activeIndex > 2){
			act = activeIndex-1;
		}
		if(activeIndex > 4){
			act = activeIndex-2;
		}
		$('#dun_nav').children('a:eq('+act+')').addClass('on');
	}
};



var charidx = 7;

var swipeset = {
	nextButton: '.mslide_next',
	prevButton: '.mslide_prev',
	slidesPerView: 1,
	initialSlide: charidx,
	paginationClickable: true,
	loop: false,
	onSlideChangeEnd : function(e){
		var index = e.activeIndex;
		if($('#mobile').is(':visible')){
			charStoryPop();
			hideCharPop();
			if(index == 5) {
				charStoryPop(1);
			} else if(index == 6){
				charViewGoTo(1);
			} else if(index == 7){
				charViewGoTo(0);
			} else if(index == 8){
				charViewGoTo(2);
			}  else if(index == 9) {
				charStoryPop(2);
			} else {
				if(index < 5){
					charPop(5-index);
				} else {
					charPop(index-4);
				}
			}
		}
	}
};

var swipeworld = {
	nextButton: '#m_dun_next',
	prevButton: '#m_dun_prev',
	slidesPerView: 1,
	paginationClickable: true,
	loop: true,
	onSlideChangeStart : function(e){
		var index = e.activeIndex;
		if(e.activeIndex == 9){
			index = 1;
		}
		if(e.activeIndex == 0){
			index = 8;
		}
		var page = index;
		if(index > 3){
			page = index-1;
		} 
		if( index > 5){
			page = index-2;
		} 
		$('#m_dun_nav > a').removeClass('on');
		$('#m_dun_nav > a').eq(page-1).addClass('on');
		if($('#mobile').is(':visible')){
			dunpos = page;
		}
	}
};
$(window).on('load', function(){
	$('body').show();
	$('html, body').animate({'scrollTop': 0},50);

	w = $(window).width();
	ww = $(window).width()-$.scrollbarWidth();
	mw = 1024-$.scrollbarWidth();
	if(ww <= mw){w = mw} else {w = w};
	h = $(window).height();
	if(h < 768){h = 768;}
	resizeVideo(w, h);
	setLayout(w, h);

	charStoryPop();
	charViewGoTo(0);
	loadBindFunc();
	mySwiper = new Swiper('#m_dun_slider', swipeworld);
	mySwiperC = new Swiper('#m_characterpop', swipeset);
	$('#dun_slider').cycle(cycleDg);

});

$(window).on('resize',function(){
	w = $(window).width();
	ww = $(window).width()-$.scrollbarWidth();
	mw = 1024-$.scrollbarWidth();
	if(ww <= mw){w = mw} else {w = w};
	h = $(window).height();
	if(h < 768){h = 768;}
	resizeVideo(w, h);
	setLayout(w, h);
});

$(window).on('scroll', function(){
	scrx = $(window).scrollLeft();
	scry = $(window).scrollTop();
	var navscr = scry;
	if(navscr >= 68){
		navscr = 68;
	}
	$('#charLeftBg').css({'right':-(1140*(1-(h/(scry+1001)))*1.8)});
	$('#charRightBg').css({'left':-(790*(1-(h/(scry+1001)))*1.8)});
	
	if(!$('#header').hasClass('nomove')){
		$('#header').css({'top':-navscr});
		if(navscr < 68){
			$('#topbar').find('.tail').removeClass('down');
		} else {
			$('#topbar').find('.tail').addClass('down');
		}
		if(ww <= mw){
			$('#header').css({'left':-scrx});	
		}	
	}
	var scrper = 0.35;
	if(h == 768){
		scrper = 1;
	}
	$('#main .wrap').css({'top':-scry*scrper});
	$('#video-bg').css({'top':-scry*scrper*0.5});
	chkMyPosition(scry);
	chkMobPosition(scry);
});

//function bind
function loadBindFunc(){
	$('.btn_char_r').on('mouseenter', function(){
		$(this).find('img').stop().animate({'left':-32},200);
		$('#charRightBg').stop().animate({'margin-left':-32},200);
	});
	$('.btn_char_r').on('mouseleave', function(){
		$(this).find('img').stop().animate({'left':0},100);
		$('#charRightBg').stop().animate({'margin-left':0},100);
	});
	$('.btn_char_l').on('mouseenter', function(){
		$(this).find('img').stop().animate({'left':32},200);
		$('#charLeftBg').stop().animate({'margin-right':-32},200);
	});
	$('.btn_char_l').on('mouseleave', function(){
		$(this).find('img').stop().animate({'left':0},100);
		$('#charLeftBg').stop().animate({'margin-right':0},100);
	});
	$('#section3 .tiles > .wrapper').each(function(){
		var tw = $(this).find('.bg').outerWidth();
		$(this).on('mouseenter', function(){
			$(this).find('.bgon').stop().animate({'display':'block', 'opacity':1, 'width':tw*1.1, 'margin-left':-tw*0.55},400);
		});
		$(this).on('mouseleave', function(){
			$(this).find('.bgon').stop().animate({'opacity':0, 'width':tw, 'margin-left':-tw*0.5},200);
		});
	});
	$('#section2 .top .tiles a').each(function(){
		var tw = $(this).find('.bg').outerWidth();
		$(this).on('mouseenter', function(){
			$(this).find('.bgon').stop().animate({'display':'block', 'opacity':1, 'width':tw*1.1, 'margin-left':-tw*0.55},400);
		});
		$(this).on('mouseleave', function(){
			$(this).find('.bgon').stop().animate({'opacity':0, 'width':tw, 'margin-left':-tw*0.5},200);
		});
	});
	$('#mnav > li').eq(3).find('a').on('click mouseleave', function(){
		$(this).find('.overimg').hide();
	});	
	$('#mnav > li').eq(3).find('a').on('mouseenter', function(){
		$(this).find('.overimg').show();
	})

	$('select[name=ostype]').on('change', function(){
		var values = $(this).val();
		$('select[name=ostype]').val(values);
		$('input:radio[name=ostype]').prop('checked',false);
		$('input:radio[name=ostype]').filter('[value='+values+']').prop('checked',true);
	});
	$('input:radio[name=ostype]').on('change', function(){
		var values = $('input:radio[name=ostype]:checked').val();
		$('select[name=ostype]').val(values);
	});
	$('input[name=usermail]').on('change', function(){
		$('input[name=usermail]').val($(this).val());
	});
	$('input[name=useragree1]').on('change', function(){
		var values = $(this).is(':checked');
		$('input[name=useragree1]').prop('checked',values);
	});
	$('input[name=useragree2]').on('change', function(){
		var values = $(this).is(':checked');
		$('input[name=useragree2]').prop('checked',values);
	});
	$('input[name=useragree3]').on('change', function(){
		var values = $(this).is(':checked');
		$('input[name=useragree3]').prop('checked',values);
	});
}

var count = 0;
function setLayout(w, h){
	if(w <= (1024-$.scrollbarWidth())){
		count ++;
		$('#pc').fadeOut(50);
		$('#mobile').fadeIn(100);
		$('#moviePop').css({'width':$(window).width()-$.scrollbarWidth()-10, 'margin-left':-Math.round(($(window).width()-$.scrollbarWidth()-12)*0.5), 'height':Math.round(($(window).width()-$.scrollbarWidth()-10)*0.5625), 'margin-top':-Math.round(($(window).width()-$.scrollbarWidth()-10)*0.5625/2)});
		$('#moviePop .btn_quit').css({'top':-Math.round(($(window).width()-$.scrollbarWidth()-10)*0.06)-2, 'right':0, 'width':Math.round(($(window).width()-$.scrollbarWidth())*0.06)});
		$('.alertPop').addClass('mob');
		if(count > 1){
			mySwiperC.slideTo(charidx);
		}
	} else {
		$('#mobile').fadeOut(50);
		$('#pc').fadeIn(100);
		$('.alertPop').removeClass('mob');
		$('#wrapper').width('100%').css({'padding-top':h});
		$('#main').width(w).height(h);
		$('#moviePop').css({'width':Math.round(w*0.6), 'margin-left':-Math.round(w*0.3), 'height':Math.round(w*0.3375), 'margin-top':-Math.round(w*0.3375/2)});
		$('#moviePop .btn_quit').css({'width':Math.round(w*0.04), 'right':-Math.round(w*0.04)-1, 'top':-1});
		if(w <= (1180-$.scrollbarWidth())){
			$('#section2 .title img, #section3 .title img').css({'width':Math.round(w*1.63), 'margin-left':-Math.round(w*0.815)});
		} else {
			$('#section2 .title img, #section3 .title img').css({'width':1920, 'margin-left':-960});
		}
		if(w <= (1280-$.scrollbarWidth())){
			$('#header').width(w);
			$('#header > .wrap').width(w);
			$('#topbar > .wrap').css({'margin':'0 auto', 'left':'0', 'position':'relative'});
			$('#topbar > .wrap .tail').css({'left':Math.round((w*0.92)-(w-826)/2)});
			$('.characters > .imgs').css({'width':w*1.415, 'margin-left':-w*0.708, 'height':'auto', 'margin-top':-w*0.395});
			$('#characters .btngroup').css({'width':w*1.415, 'margin-left':-w*0.708, 'height':w*0.395, 'margin-top':-w*0.395});
			$('.characters .slider').attr('style','');
			$('.charpop .charimg').css({'width':w, 'margin-left':-w*0.5, 'margin-top':-w*0.396});
		} else {
			$('#header').width('100%');
			$('#header > .wrap').width(1068);
			$('#topbar > .wrap').css({'margin':'0 0 0 -413px', 'left':'50%', 'position':'relative'});
			$('#topbar > .wrap .tail').css({'left':946});
			$('.characters > .imgs').css({'width':1812, 'margin-left':-906, 'height':'auto', 'margin-top':-500});
			$('#characters .btngroup').css({'width':1812, 'margin-left':-906, 'height':500, 'margin-top':-500});
			$('.charpop .charimg').css({'width':1370, 'margin-left':-685, 'margin-top':-540});
		}
		if(w <= (1920-$.scrollbarWidth())){
			$('#section2 .bg > img').css({'height':350, 'width':640});
			$('#section2 .top .txt').css({'height':Math.ceil((w/3)*0.2734), 'width':'100%', 'margin-left':-Math.ceil((w/3)/2)});
			$('#section2 .bottom .txt > img').css({'width':'100%', 'margin-top':-Math.ceil((w/4)*0.3646), 'margin-left':-Math.ceil((w/4)/2)});
			$('#section3 .bg').attr('style','');
			$('#section3 .bgon').attr('style','');
		} else {
			$('#section2 .bg > img').css({'height':'auto', 'width':'100%'});
			$('#section2 .top .txt').css({'height':175, 'width':640, 'margin-left':-320});
			$('#section2 .bottom .txt > img').css({'width':480,'margin-top':-175,'margin-left':-240});
			$('#section3 .bg').css({'width':'100%', 'height': 'auto', 'margin-left':0, 'left':0});
			$('#section3 .left .bg').css({'min-height':350});
			$('#section3 .bgon').css({'width':'100%', 'height': 'auto'});
		}
		$('#characters_left .slider').css({'margin-left':w*0.39});
		$('#characters_right .slider').css({'margin-left':-w*0.39});
		switch(charpos){
			case 0:
				//로드군단
				$('#characters_center').css({'left':w});
				$('#characters_left').css({'left':0});
				$('#characters_right').css({'left':w*2});
				break;
			case 1:
				//중앙
				$('#characters_center').css({'left':0});
				$('#characters_left').css({'left':-w});
				$('#characters_right').css({'left':w});
				break;
			case 2:
				//세계변혁기관
				$('#characters_center').css({'left':-w});
				$('#characters_left').css({'left':-w*2});
				$('#characters_right').css({'left':0});
				break;
		}
	}
}

var resizeVideo = function (w, h) {
	var heightcorrection = 0,
         width = w,
         pWidth, // player width, to be defined
         height = h - heightcorrection,
         pHeight, // player height, tbd
         $videoPlayer = $('#video-obj');        

     if (width / ratio < height) { // if new video height < window height (gap underneath)
         pWidth = Math.ceil(height * ratio); // get new player width
         $videoPlayer.width(pWidth).height(height).css({
			 left: '50%',
			 top: '50%',
			 marginLeft: -pWidth/2,
			 marginTop: -height/2
         }); // player width is greater, offset left; reset top  

     } else { // new video width < window width (gap to right)
         pHeight = Math.ceil(width / ratio); // get new player height
         $videoPlayer.width(width).height(pHeight).css({
			 left: '50%',
			 top: '50%',
			 marginLeft: -width/2,
			 marginTop: -pHeight/2
         }); // player height is greater, offset top; reset left

     }

}

function pageMove(idx){
	switch(idx){
		case 0:
			$('html, body').stop().animate({'scrollTop': 0},400);
			break;
		case 1:
			$('html, body').stop().animate({'scrollTop': $('#characters').offset().top-95},400);
			break;
		case 2:
			$('html, body').stop().animate({'scrollTop': $('#section2').offset().top-95},400);
			break;
		case 3:
			$('html, body').stop().animate({'scrollTop': $('#section3').offset().top-95},400);
			break;
	}
}



function goCafe(){
	window.open('#');
}


function showHideNav(obj){
	if(!$(obj).hasClass('down')){
		$('#header').animate({'top':-68},200);
		$('#header').removeClass('nomove');
		$(obj).addClass('down');
	} else {
		$('#header').animate({'top':0},200);
		$('#header').addClass('nomove');
		$(obj).removeClass('down');
	}
}


function charViewGoTo(idx){
	switch(idx){
		case 0:
			//중앙
			$('#characters_center').animate({'left':0},400, 'linear');
			$('#characters_left').animate({'left':-w},400, 'linear');
			$('#characters_right').animate({'left':w},400, 'linear');
			charpos = 1;
			charidx = 7;
			break;
		case 1:
			//로드군단
			$('#characters_center').animate({'left':w},400, 'linear');
			$('#characters_left').animate({'left':0},400, 'linear');
			$('#characters_right').animate({'left':w*2},400, 'linear');
			charpos = 0;
			charidx = 6;
			break;
		case 2:
			//세계변혁기관
			$('#characters_center').animate({'left':-w},400, 'linear');
			$('#characters_left').animate({'left':-w*2},400, 'linear');
			$('#characters_right').animate({'left':0},400, 'linear');
			charpos = 2;
			charidx = 8;
			break;
	}
	$('.characters_pager > a').removeClass('on');
	$('.characters_pager > a').eq(charpos).addClass('on');
}


function chkMyPosition(scr){
	var nowPos = 0;
	if((scr >= 0) && (scr < $('#characters').offset().top/2)){
		nowPos = 0;
	} else if( scr < $('#characters').offset().top + $('#characters').outerHeight()/2 ){
		nowPos = 1;
	} else if( scr < $('#section2').offset().top + $('#section2').outerHeight()/2 ){
		nowPos = 2;
	} else{
		nowPos = 3;
	}
	$('#sidenav > ul').find('li').removeClass('on');
	$('#sidenav > ul').find('li').eq(nowPos).addClass('on');
	$('#nav').find('li').removeClass('on');
	$('#nav').find('li').eq(nowPos).addClass('on');
}


function charStoryPop(idx){
	$('.storypop').hide();
	if(idx > 0){
		$('#storypop'+idx).fadeIn(100);	
		if($('#pc').is(':visible')){			
			$('html, body').stop().animate({'scrollTop': $('#characters').offset().top},200);
		}
		if(idx == 1){
			charidx = 5;
		} else {
			charidx = 9;
		}
	} else {
		if($('#characters_left').css('left').replace('px','') == 0){
			charidx = 6;
		} else {
			charidx = 8;	
		}
	}
}


var charcolors = ['#dd3427', '#ffda47', '#e1eb46', '#ff9f22', '#ff4956', '#701fc5', '#497b37', '#9000eb', '#1d72ff', '#3be6ff'];
function charPop(idx){
	var group = Math.ceil(idx/5);
	$('#characterpop'+group).css({"background":charcolors[idx-1]});
	if(!$('#characterpop'+group).is(':visible')){
		$('.charpop').hide();
		$('#characterpop'+group).find('.sliders').hide();
		$('#characterpop'+group).show();
	} else {
		$('#characterpop'+group).find('.sliders').fadeOut(200);
	}
	$('#characterpop'+group).find('.sliders.index'+idx).fadeIn(200);
	if($('#pc').is(':visible')){
		$('html, body').stop().animate({'scrollTop': $('#characters').offset().top},200);
	}
	if(idx <= 5){	
		charidx = 5-idx;
	} else {
		charidx = idx+4;
	}
}

function hideCharPop(){
	if($('#characters_left').css('left').replace('px','') == 0){
		charidx = 6;
	} else {
		charidx = 8;	
	}
	$('.charpop').fadeOut(100);
	$('#characterdim').fadeOut(100);
}

//worldPop
function moveTodungeon(idx){
	if($('#dungeonPop').is(':visible')){
		$('#dun_navs > a').eq(idx).click();
	} else {
		$('#dungeonPop').fadeIn(100);
		$('#dun_navs > a').eq(idx).click();
	}
}
function hideDunPop(){
	$('#dungeonPop').fadeOut(100);
	$('html, body').stop().animate({'scrollTop': $('#section3').offset().top},400);	
}


function showMoviePop(code, page){
	var movsrc = 'https://youtube.com/embed/'+code+'?modestbranding=1&autoplay=1&hd=1&title=0&controls=0&showinfo=0&autohide=1&rel=0&wmode=opaque';
	$('#movie-obj').attr('src',movsrc);
	$('#dim').show();
	$('#moviePop').show();
	$('#mobile').css({'height':'100%','overflow':'hidden'});
	$('#moviePop .btn_quit').attr('onclick', 'hideMoviePop('+page+')');
}
function hideMoviePop(page){
	$('#movie-obj').attr('src','');
	$('#mobile').css({'height':'auto','overflow':'visible'});
	$('#dim').hide();
	$('#moviePop').hide();
	if($('#pc').is(':visible')){
		pageMove(page);
	} else {
		mPageMove(page);
	}
}




var userinfo = new Object;
function applyResvChk(){
	var os = $('select[name=ostype]').val();
	var usermail = $('input[name=usermail]').val();
	var agr1 = $('input[name=useragree1]').is(':checked');
	var agr2 = $('input[name=useragree2]').is(':checked');
	//이메일 유효성 검증
	var regExp = /^[\w]{4,}@[\w]+(\.[\w-]+){1,3}$/;
	if (!regExp.test(usermail)){
		showAlert('alert_chk_num');
	} else if(!agr1){
		showAlert('alert_agr_collect');
	} else if(!agr2){
		showAlert('alert_agr_sign');
	} else {
		userinfo.os = os;
		userinfo.mail = usermail;
		console.log(userinfo);
		showAlert('alert_reserved');
		//이미신청 ::::: showAlert('alert_resv_prev');
	}
}

function applyResv(){
	hideAlert('alert_resv_note');
}

function goDetail(n){
	switch(n){
		case 1:
			//Privacy Policy
			window.open('https://m-page.nexon.com/term/17');
			break;
		case 2:
			//Terms of Use
			window.open('https://m-page.nexon.com/term/16');
			break;
		default:
			break;
	}
}

function showAlert(idx){
	$('#dim').show();
	$('.alertPop').hide();
	$('#'+idx).show();
}

function hideAlert(idx){
	$('#dim').hide();
	if(idx.length > 0){
		$('#'+idx).hide();
	} else {
		$('.alertPop').hide();
	}
}


function snsLink(type){
	switch(type){
		case 'facebook':
			facebook();
			break;
		case 'twitter':
			twitter();
			break;
		case 'kakaotalk':
			kakaoTalk();
			break;
	}
}





var mh;
var mw;
$(window).on('load resize', function(){
	mh = $(window).height();
	mw = $(window).width();
	$('#m_main').height(Math.round(mw*1.71));
});
$(document).ready(function(){
	if(device == 'm'){
		$('#mnav li a').hover(function(){$(this).click()});
	}
});
	

function showMobileSnsLinks(){
	if($('#mheader').find('.snslinks').is(':visible')){
		$('#mheader').find('.snslinks').hide();
	} else {
		$('#mheader').find('.snslinks').show();
	}
}

function moveToMdungeon(idx){
	mySwiper.slideTo(idx+1);
}


function mPageMove(idx){
	switch(idx){
		case 0:
			$('html, body').stop().animate({'scrollTop': 0},300);
			break;
		case 1:
			$('html, body').stop().animate({'scrollTop': $('#m_characters').offset().top},300);
			break;
		case 2:
			$('html, body').stop().animate({'scrollTop': $('#m_sect2').offset().top},300);
			break;
	};
	$('#mnav').find('li > a').blur();
}


function chkMobPosition(scr){
	var nowPos = 0;
	if(scr < $('#m_characters').offset().top + $('#m_characters').outerHeight()/2){
		nowPos = 0;
	} else {
		nowPos = 1;
	}
	$('#mnav').find('li > a').removeClass('on');
	$('#mnav').find('li').eq(nowPos).find('a').addClass('on');
}


function mStoryPop(idx){
	if(idx > 0){
		$('.mstorypop').hide();
		$('#m_storypop'+idx).fadeIn(200);
		if($('#mobile').is(':visible')){
			mPageMove(2);
		}
	} else {
		$('.mstorypop').fadeOut(100);
	}
	if($('#mobile').is(':visible')){
		charStoryPop(idx);
	}
}


function mcharPop(idx){
	var group = Math.ceil(idx/5);
	$('#m_characterpop'+group).css({"background":charcolors[idx-1]});
	if(!$('#m_characterpop'+group).hasClass('visible')){
		$('.mcharpop').hide();
		$('#m_characterpop'+group).addClass('visible');
		$('#m_characterpop'+group).show();	
	} else {
		if(idx < 6){
			mySwiper1.slideTo(idx%5);
		} else {
			mySwiper2.slideTo(idx%5);
		}	
	}
}

function hidemcharPop(){
	$('.mcharpop').fadeOut(100);
	if($('#m_characterpop1').hasClass('visible')){
		mySwiper1.destroy();
	}
	if($('#m_characterpop2').hasClass('visible')){
		mySwiper2.destroy();
	}
	$('.mcharpop').removeClass('visible');
	if($('#mobile').is(':visible')){
		mPageMove(2);
		hideCharPop();
	}
}



function playstore(){
	window.open("https://177558.measurementapi.com/serve?action=click&publisher_id=177558&site_id=105148&my_keyword=Chinese");
}

function appstore(){
	window.open("https://177558.measurementapi.com/serve?action=click&publisher_id=177558&site_id=105158&my_keyword=Chinese");
}

/*footerLinks*/

function footerLink(idx){
	switch(idx){
		case 1:
			location.href="http://company.nexon.com/Eng";
			break;
		case 2:
			location.href="http://m.nexon.com/terms/29";
			break;
		case 3:
			location.href="http://m.nexon.com/terms/27";
			break;
	}
}