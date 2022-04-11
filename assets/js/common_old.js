/**
* UTIL
* -----------------------------------------
*/
$(document).ready(function(){
	// 전체메뉴 append : gnbHandler()로 이동 : 2018.07.03
	
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

	// 공통 탭 네비게이션 시작
	var tabNavs = $(".tabNav li");
	tabNavs.click(function(){
		if(!tabNavs.parents('.tabNav').hasClass('pageTab')){
			var tabId = $(this).attr('data-tab');
			var tabConts = $(this).closest('.tabNav').siblings('.tabContent');

			$(this).siblings().removeClass('is-on');
			tabConts.removeClass('is-current');

			$(this).addClass('is-on');
			$("#"+tabId).addClass('is-current');
			return false;
		}
	});
	// 공통 탭 네비게이션 끝
	// 컨텐츠 안 탭 네비게이션 시작
	var tabNavSubs = $(".tabNavSub li");
	tabNavSubs.click(function(){
		if(!tabNavSubs.parents('.tabNavSub').hasClass('pageTab')){
			var tabId = $(this).attr('data-tab');
			var tabConts = $(this).closest('.tabNavSub').siblings('.tabContent');

			$(this).siblings().removeClass('is-on');
			tabConts.removeClass('is-current');

			$(this).addClass('is-on');
			$("#"+tabId).addClass('is-current');
			return false;
		}
	});
	// 컨텐츠 안 탭 네비게이션 끝

	var accordionTitle = $('.accordion > li > dl > dt');
	if( accordionTitle.hasClass('js-active') ){
			$('.js-active').siblings('dd').addClass('dp-block');
	}
	accordionTitle.click(function(){
		if( $(this).hasClass('js-active') ){
			$(this).removeClass("js-active").siblings('dd').slideUp(200);
			$(this).closest('li').removeClass('on');
			$(this).siblings('dd').toggleClass('dp-block');
		}
		else{$(this).addClass("js-active").siblings('dd').slideDown(200);
			$(this).closest('li').addClass('on');
			$(this).siblings('dd').toggleClass('dp-block');
		}
	});

	// 공통 아코디언 끝


	 // with-fixedBtn Filter code 시작
	// 컨텐츠 fixed bottom button이 유효할 경우
	// 최하위 <section>에(selfBottom 직전 마크업) 클래스 추가 여부 확인과 누락 방지 코드
	var bodyCheck = $('#container > div[data-role="content"] > section:last');
	if(!bodyCheck.hasClass('no-fixed') && !bodyCheck.hasClass('with-fixedBtn')) {
		bodyCheck.siblings('section').removeClass('with-fixedBtn');
		bodyCheck.addClass('with-fixedBtn');
	}
	// with-fixedBtn Filter code 끝

	// 확장형 리스트 토글 더보기 버튼 시작
	var moreBtn = $('.moreBtn');
	moreBtn.change(function(){
		$(this).parent().siblings('dl').toggleClass('expand');
	});
	// 확장형 리스트 토글 더보기 버튼 끝

	// 기간조회 토글 조건박스시작
	var detailSearch = $('.detailSearch input');
	$('.periodBox').prepend('<h3 class="visualHide">상세검색</h3>');//접근성 마크업 삽입
	detailSearch.change(function(){
		$(this).parents('.periodSearch').next().toggleClass('expand');
	});
	// 기간조회 토글 조건박스끝

	// 토글 툴팁 버튼 시작
	var toolBtn = $('.helpTooltip');
	var bubbleClose = $('.helpBubble > .closeBtn');

	toolBtn.each(function(){
		if($(this).siblings().hasClass('helpBubble')) $(this).attr('title','도움말 보기');
		else $(this).removeAttr('title'); //예외 : 도움말 없이 링크일 경우
	});

	toolBtn.click(function(){
		if(!$(this).siblings().hasClass('helpBubble')) return false;
		$(this).toggleClass('on');
		var tipBoxClass = '.' + $(this).attr('name');
		if($(tipBoxClass).hasClass('is-current')){
			toolBtn.attr('title','닫혀짐');
		}else{
			toolBtn.attr('title','펼쳐짐');
		}
		$(tipBoxClass).toggleClass('is-current');
	});

	bubbleClose.click(function(){
		$(this).parent().siblings('button.helpTooltip').trigger("click").focus();
	});
	// 토글 툴팁 버튼 끝

	// 토글 비과세 조회정보 레이어 시작
	var 	radioSet = $('.toggleRadio input[type="radio"]');
	radioSet.change(function() {
		$('.toggleLayerOn').removeClass('is-current');
		if($(this).hasClass('toggleLayer') && $(this).prop('checked')){
			$(this).parents('.toggleRadio').next().addClass('is-current');
		}
	});
	// 토글 비과세 조회정보 레이어 끝

	// 주소록 중복 checked background color 시작
	if($('section').hasClass('selectorBoard')){
		var 	adrItem = $('.addrBook .selectorTag input');
		adrItem.change(function(event) {
			$(this).parents('li').toggleClass('inp-checked');
		});
	}
	// 주소록 중복 checked background color 끝

	// 외화포켓예금 해지구분 선택형 노출 시작 (ex : UI-PD-A15/UI-PD-A15009.html)
	// select-input 의 class 값과 option name 값으로 응용 가능하게 구현
	$('.printOptionBox select').change(function() {
		$('div[class^="showBox"]').removeClass('dp-block').hide();
		var hideBoxClass = '.' + $('.printOptionBox select option:selected').attr('name');
		$(hideBoxClass).show();
	});
	// 외화포켓예금 해지구분 선택형 노출 끝

	// 공통 검색바 입력내용 지우기 버튼 시작
	var textField = $('.search-input');
	var deleteText = $('.deleteBtn');

	textField.click(function(){
		deleteText.hide();
		if($(textField).is(':focus')){
			$(this).siblings(deleteText).show();
		}
		return false;
	});

	// 공통 검색바 입력내용 지우기 버튼 끝

	// 일반 인풋 박스 입력내용 지우기 버튼 시작
	var commonField = $('.textInput');

	commonField.click(function(){
		var commonDel = $(this).find('button');
		if(commonDel.hasClass('deleteBtn')) {
			deleteText.hide();
			if($(commonField).find('input').is(':focus')){
				commonDel.show();
			}
			return false;
		};
	});
	// 일반 인풋 박스 입력내용 지우기 버튼 끝

	// 공통 입력내용 지우기 버튼 시작
	deleteText.click(function(){
		$(this).siblings(textField).val("");
		$(this).hide();
		return false;
		});
	// 공통 입력내용 지우기 버튼 끝

	// 출금계좌 비밀번호 선택형 노출 시작 (ex : UI-PD-A13/UI-PD-A13028.html)
	var 	checkedSet = $('div[class*="checkToggleBox"] input');
	checkedSet.change(function() {
		$('.checkedPrint').addClass('dp-block').removeClass('dp-none');
		if($(this).prop('checked')){
			$(this).parents('.checkToggleBox').next().addClass('dp-none').removeClass('dp-block');
		}
	});
	// 외화포켓예금 해지구분 선택형 노출 끝

	// 프렌즈 다운로드 gif 탭 선택시 리로드 시작 (UI-PD-A16039.html)
	// <span class="cover"></span>
	// gif animation 진행 중일 때 클릭 시 리로드 되지 않는 bug fix
	function removeCover(){
		setTimeout(function(){
			$('.cover').hide();
		}, 5000);
	};
	if($('.tabNavSub li[data-tab="tabSubCon01"] span').hasClass('cover')){
		removeCover();
	}
	$('.tabNavSub li[data-tab="tabSubCon01"] a').click(function(){
		$(this).parent().find('span').show();
		$('#tabSubCon01 .imgArea img').each(function(){
			var src = $(this).attr('src');
			$(this).attr('src','');
			$(this).attr('src', src);
			removeCover();
		});
	});
	// 프렌즈 다운로드 gif 탭 선택시 리로드 끝
	
	// 금액 입력란 비활성화 시 클래스 추가 
	$('.balance.balance-display > .balance-input').each(function(){
		if($(this).attr('disabled') == "true" || $(this).attr('disabled') == true){
			$(this).closest('.balance.balance-display').addClass('disabled');
		};
	});

});
	// 상품 상세 하단 버튼 플로팅 시작
/*	var lastScrollTop = 0;
	$(window).on('scroll',function(){
		var st = $(this).scrollTop();
		var bottomPos = $(document).height() - $(window).height();
		if(st < lastScrollTop){
		 $('.productBottom').css('display','flex'); // up
		 // console.log(bottomPos);
		}else if(st == bottomPos){
		 $('.productBottom').css('display','flex');
		}else{
		 $('.productBottom').hide(); // down
		}
		lastScrollTop = st;
	});*/
	// 상품 상세 하단 버튼 플로팅 끝

		// 로딩바 시작
		var scrollSpeed = 200;
		var step = 12;
		var current = 0;
		var imageWidth = 48;
		var varHeight = 12;

		var restartPosition = -(imageWidth - varHeight);

		function scrollBg(){
			current -= step;
			if(current == restartPosition){
				current = 0;
			}
			$('.loadBar').css('background-position','0 '+current+'px');
		}
		var init = setInterval('scrollBg()',scrollSpeed);
		// 로딩바 끝
