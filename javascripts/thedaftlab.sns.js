var linkUrl  = location.href;
var title = '重溫經典回憶! 奇想之戰全球正式開放! ';

var des = "與全世界一起享受真正的遊戲樂趣!";

//페이스북은 html에 meta를 참조함
//https://developers.facebook.com/tools/debug 캐쉬 삭제

function facebook(){
	url = "http://www.facebook.com/sharer.php?u=" +linkUrl+"&t="+encodeURIComponent(title);
	var retPop = window.open(url,'sns' ,'height=500px, width=750px');
	if(retPop == null ){
          alert( "팝업 차단이 설정되어 있습니다.." );
     }
}

function twitter(){
	url = "https://twitter.com/intent/tweet?text=" +encodeURIComponent(title)+encodeURIComponent(des)+" : "+linkUrl;
	var retPop = window.open(url,'sns' ,'height=500px, width=750px');
	if(retPop == null ){
          alert( "팝업 차단이 설정되어 있습니다.." );
     }
}

function kakaoStory(){
	url = "https://story.kakao.com/share?url="+encodeURIComponent(linkUrl);
	var retPop = window.open(url,'sns','height=500px, width=750px');
	if(retPop == null ){
          alert( "팝업 차단이 설정되어 있습니다.." );
    }
}

function kakaoTalk(){
	 Kakao.init('07e91a3daff7378540607ab240f9c08b');//개발자 key 
	  Kakao.Link.createTalkLink({
		   container: '#kakao-link-btn',
		   label: title,
		   image: {
			 src: '../SFW_kakao.jpg',
			 width: '700',
			 height: '400'
		   },
		   webButton: {
			 text: '이벤트 바로가기'
		   },
		   fail: function() {
			 alert('KakaoLink is currently only supported in iOS and Android platforms.');
		   }
	  });
}