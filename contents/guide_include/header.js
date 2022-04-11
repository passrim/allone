
/**
* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
* ★해당 파일은 퍼블리싱 UI 관련 스크립트 모음입니다.
* ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
* 
* ------------------
* loginFlag : 로그인이전: false(default), 로그인이후 : true
* header_type01 : 전체 메뉴 유
* header_type02 : 전체 메뉴 무
*/

var includePub = (function(){
	//로그인 이전
	var jMap={
		header_type01 : String()
			+'	<nav>'
			+'		<ul class="columnSet leftedColumn col-valign">'
			+'			<li><a href="javascript:void(0);" class="headerNav backBtn" title="뒤로가기">뒤로가기</a></li>'
			+'		</ul>'
			+'		<h1 class="headerTitle">마이올원</h1>'
			+'	</nav>'

		, header_type02 : String()
			+'	<nav>'
			+'		<a href="javascript:void(0);" class="headerNav backBtn">뒤로가기</a>'
			+'		<h1 class="headerTitle">마이올원</h1>'
			+'	</nav>'

		, header_type03 : String()
			+'	<nav>'
			+'		<h1 class="headerTitle">마이올원</h1>'
			+'	</nav>'

		, gnb : String()
			+'<div id="gnb" data-role="global-navigation" class="gnb">'
			+'	<div class="header">'
			+'		<ul>'
			+'			<li><a href="javascript:void(0);" class="headerNav homeBtn">메인</a></li>'
			+'			<li><a href="javascript:void(0);" class="headerNav settingBtn">설정</a></li>'
			+'		</ul>'
			+'		<button type="button" class="btn closeBtn" id="gnbClose">닫기</button>'
			+'	</div>'
			+'	<div class="gnbList">'
			+'		로그인전 GNB'
			+'	</div>'
			+'</div>'
	}

	//로그인 후
	var jMap_login={
		header_type01 : String()
			+'	<nav>'
			+'		<ul>'
			+'			<li><input type="checkbox" class="headerNav navBtn" /><label for="">전체메뉴</label></li>'
			+'			<li><a href="javascript:void(0);" class="headerNav settingBtn">설정</a></li>'
			+'		</ul>'
			+'		<h1 class="headerTitle">마이올원</h1>'
			+'		<a href="javascript:void(0);" class="headerNav loginBtn open3">로그아웃</a>'  //로그아웃 아이콘 작업
			+'	</nav>'

		, header_type02 : String()
			+'	<nav>'
			+'		<a href="javascript:void(0);" class="headerNav backBtn">뒤로가기</a>'
			+'		<h1 class="headerTitle">마이올원</h1>'
			+'	</nav>'

		, gnb : String()
			+'<div id="gnb" data-role="global-navigation" class="gnb">'
			+'	<div class="header">'
			+'		<ul>'
			+'			<li><a href="javascript:void(0);" class="headerNav homeBtn">메인</a></li>'
			+'			<li><a href="javascript:void(0);" class="headerNav settingBtn">설정</a></li>'
			+'		</ul>'
			+'		<button type="button" class="btn closeBtn" id="gnbClose">닫기</button>'
			+'	</div>'
			+'	<div class="gnbList">'
			+'		로그인후 GNB'
			+'	</div>'
			+'</div>'
	}

	var init = function (includeType , loginFlag) {
		var loginMap = jMap
		if(loginFlag) loginMap =jMap_login

		//Header & GNB
		$('#header').append(loginMap[includeType]);
		if(includeType == "header_type01"){
			//$('body').append(loginMap.gnb);
			//gnbHandler();	//Layout.init()에서 옮겨옮 (퍼블 확인용 -개발에서 따로 가져감 : 0806)
			var mainBody = $('body');
			var navBtn = $('.headerNav.navBtn');
			var gnbClose = $('#gnbClose');

			navBtn.change(function(){
				$('.gnb').toggleClass('no-transform');
				mainBody.toggleClass('noScroll');
			});

			gnbClose.click(function(){
				$('.gnb').toggleClass('no-transform');
				mainBody.toggleClass('noScroll');
			});
		}

		//Hader Title
		headerTitle();
	}


	var headerTitle = function(){
		var titleTxt = $('head title').text() || 'AllOne BANK';
		var tmpAR = titleTxt.split('-');
		$('#header h1.headerTitle').text(tmpAR[tmpAR.length-1]);
	}

	return {init : init };

})();


