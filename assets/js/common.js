/**
* Pub 공통 함수
* -----------------------------------------
*/
(function(context) {
	"use strict";
	var Pub = Pub || {}
	Pub.pageLoadCnt = 0; //초기 Loaded 아닌  ajax Loaded 카운트 체크
	Pub.util = {
		isValid : function(variables) {
			if (variables == null || variables == undefined || variables === '' || variables == 'undefine') return false;
			else return true;
		}
		, browserCheck : function(){

		}
	};
	context.Pub = Pub;
})(window);


/**
* Layout Setup
* -----------------------------------------
* @param loginFlag : true (로그인후), false(로그인전)
*/
var Layout = (function(){
	var jMap = {}
	, vMap = {}
	, setMap = function(){
		jMap = {
			html : $('html')
			, body : $('body')
			, wrap : $('#wrap')
			, header : $('#header')
			, gnb : $('#gnb')
			, conainer : $('#container')
			, content : $('.content')
			, tabMenu : $('.tabMenu')
			, footer : $('#footer')
		}
		, vMap = {
			is_firstLoad : true
			, loginFlag : false
			, is_main : false
			, is_pop : false
			, is_gnb : true
		};
	}
	, page= {
		init : function(){
			//onLoad(초기 로드), cpLoad(contentPage 로드)
			if(jMap.html.hasClass('onLoad')) {
				vMap.is_firstLoad = false;
				jMap.html.removeClass('cpLoad'+Pub.pageLoadCnt);
				Pub.pageLoadCnt ++;
				jMap.html.addClass('cpLoad'+Pub.pageLoadCnt);
			} else {
				jMap.html.addClass('onLoad');
				Pub.util.browserCheck();
			}
			//Page TYPE
			if(jMap.wrap.hasClass('main')) vMap.is_main = true;
		}
	}
	, step ={
		accouttHandler : function(){
			var $target = $('.step')
				, $item = $target.find('li')
				, totalStep = $item.last().text()
				, curStep = 0
				, hiddenClass = 'visualHide' // 접근성 hidden 클래스
				, html = ''
			;
			if($target.closest('.stepHistory').length){
				var totalCnt = $item.last().index()+1 ;
				var curCnt = 1;
				$item.each(function(index){
					if($(this).hasClass('is-done')) {
						curCnt = index +1;
						curStep = curCnt +'단계 '+ $(this).text();
						$(this).append('<span class="visualHide">완료</span>');
					}
				});
				$item.eq(curCnt-1).attr('title', '선택됨')
				if(curStep < 1) html = '<div class=\"'+hiddenClass+'\">전체 ' + totalCnt + '단계 중 완료단계 없음</div>';
				else html = '<div class=\"'+hiddenClass+'\">전체 ' + totalCnt + '단계 중 '+ curStep +'단계 까지 완료</div>';

				$target.before(html);
			}
		},
		handler : function(){
			var $target = $('.step')
				, $item = $target.find('li')
				, totalStep = $item.last().text()
				, curStep = 0
				, hiddenClass = 'visualHide' // 접근성 hidden 클래스
				, html = ''
			;

			//Extra : 입출금 계좌 개설 스텝
			if($target.closest('.stepHistory').length){
				//step.accouttHandler() 로 대체 (해당 개발페이지에서 직접 호출)
			}
			//공통 스텝
			else{
				$target.each(function(){
					$(this).find('li').each(function(index){
						// var _txt = parseInt($(this).text());
						if($(this).hasClass('is-on')) curStep = $(this).text();
					});
					if($(this).css('display') == 'none'){
						//1023 : 스텝 숨겨놓은 부분 버그 픽스
					}else{
						html = '<div class=\"'+hiddenClass+'\">전체 ' + totalStep + '단계 중 현재 '+ curStep +'단계</div>';
						$(this).before(html);
					}
				})
			}
		}
	}
	, table = {
		addCaption : function(){
			$("table").each(function() {
				//제외 테이블
				// if($(this).hasClass('xxx_table')) return false;

				var ARth = []
					, $summary = $(this).attr('summary')
					, $caption = $(this).find('caption')
					, captionStr = $caption.text()
					, $th = $(this).find('th')
					, joinStr = ''
					, arCnt = 0
				;
				$th.each(function(i) {
					var thTxt = $(this).text()
						.replace(/\s/g, "")
						.replace('필수항목', '')
						.replace($(this).find('a').text(), '') //버튼 텍스트 삭제
						.replace(/^\s/g, "")//첫 공백 삭제, &nbsp;
						.replace(/\s$/g, "")//마지막 공백 삭제, &nbsp;
					;
					if($(this).find('input').length){
						var title = $(this).find('input').attr('title');
						ARth[arCnt] = title;
					}
					else if(Number(thTxt.length) <=0) return true; //공백문자 제거
					else ARth[arCnt] = thTxt;
					arCnt++;
				});

				joinStr = ARth.join(', ');

				$(this).removeAttr('summary');
				if($caption.length > 0) {
					$caption.text('').text(joinStr + ' 항목으로 이루어진 정보테이블입니다.');
				} else{
					$(this).prepend('<caption>'+joinStr+ ' 항목으로 이루어진 정보테이블입니다.</caption>');
				}
			});
		}
	}
	, accessbility = {
		require : function(){
			$('label .required').each(function(){
				$(this).append('<span class="visualHide">필수입력항목</span>')
					.closest('label').attr('aria-required', true)
				;
			});
		}
	}
	, layer = {
		handler : function(){
			//init
			var $optionLayer = $('.editorLayer');
			var $optionBtn = $('.layerBtn >a');

			$optionLayer.each(function(){
				if( $(this).hasClass('on')){
					optionLayer.open($(this), $(this).siblings('.layerBtn').find('a'));
				}
			});

			//eventHandler
			$optionBtn.each(function(){
				var $layer = $(this).parent().siblings('.editorLayer');
				$(this).removeAttr('aria-role').attr('role', 'button');
				$(this).on({
					click : function(){
						if($(this).hasClass('on')) {
							optionLayer.close($layer , $(this));
						} else {
							optionLayer.close($optionLayer, $optionBtn);
							optionLayer.open($layer , $(this));
						}
						// return false; (개발 요구로 삭제 : 0831)
					}
				});
			});
		}
	}
	, header = {
		init : function(){
			// if(jMap.gnb.length > 0){
			// 	gnbHandler();// header.js 에서 호출(퍼블 확인용 -개발에서 따로 가져감 : 0806)
			// }
		}
	}
	, footer = {
		handler : function(){

		}
	}

	//====================================================
	, init = function(_param){
		setMap();
		if(_param) vMap.loginFlag  = _param.loginFlag;
		page.init();

		//메인
		if(vMap.is_main){
			//
		}
		//서브 & 팝업
		else{
			step.handler();//스텝
			table.addCaption(); //테이블 Caption
			layer.handler();//옵션 레이어
			accessbility.require();//필수 입력항목 대체 텍스트
			// accordionHandler();
		}

		//공통 & 최초 로드시
		//if(vMap.is_firstLoad){}
	};

	return {
		init : init
		, step : step.handler
		, stepAccount : step.accouttHandler // 계좌개설 스텝 
	}
})();



/**
* 옵션 레이어 컨트롤
* -----------------------------------------
* Layer : .editorLayer
* Layer close : .editorLayer > .close_btn
* Layer open : .layerBtn > .i_moreBtn
*/
var optionLayer = (function(){
	var open = function(layer, button) {
		var _this = this
			, accessHtml = "<span class=\"helper_a11y\" tabindex=\"0\"></span>"
			, $closeBtn = layer.find('.close_btn')
		;

		button
			.addClass('on')
			.attr('title', '옵션 닫기')
			.focusin(function(){
				$closeBtn.focus();//Back Tab 방지
			})
		;
		layer
			.addClass('on')
			.attr('tabindex', '0')
			//.focus()
			.append(accessHtml)
			/*.find('.helper_a11y').focusin(function() {
				layer.focus();
			})*/
		;

		$closeBtn.unbind('click').bind('click', function() {
			_this.close(layer, button);
			return false;
		});
	}
	, close = function(layer, button) {
		layer
			.removeAttr('tabindex')
			.removeClass('on')
			.find('.helper_a11y').remove()
		;
		button
			.removeClass('on')
			.attr('title', '옵션열기')
			//.focus()
		;
	};

	return{
		open : open
		, close : close
	};
})();



/**
* 레이어 컨트롤
* -----------------------------------------
* 퍼블 가이드로만 사용(개발 따로 가져감)
*	1. body.noScroll 확인 필요
*	2. 버튼 포커싱 확인 필요
*/
var layerPop = (function(){
	var Gbutton ;

	var open = function(layer, button) {
		var _this = this;
		_this.layer = $(layer);
		Gbutton = _this.button = $(button);
		_this.accessBtn = "<span class=\"helper_a11y\" tabindex=\"0\"></span>";
		// _this.accessBtn = '<a href="javascript:void(0);" role="button" id="pop_start" class="helper_a11y" tabindex="0"></a>';

		$('body').addClass('noScroll');

		_this.layer.show()
			.addClass('dimmed')
			.attr('tabindex', '0')
			.focus()
			.append(_this.accessBtn)
			.find('.helper_a11y').focusin(function() {
				$(_this.layer).focus();
			})
		;

		_this.layer.find('.closeBtn').unbind('click').bind('click', function() {
			_this.close(_this.layer, _this.button);
			return false;
		});
	},
	close = function(layer, button) {
		var  _this = this;
		_this.layer = $(layer);

		if(Pub.util.isValid(button)) _this.button = $(button);
		else _this.button = Gbutton;

		$('body').removeClass('noScroll');//2중 팝업일경우 확인
		_this.layer.removeAttr('tabindex').find('.helper_a11y').remove();
		_this.layer.hide();
		_this.button.focus();
	};

	return{
		open: open
		, close : close
	};
})();


/**
* Tab
* -----------------------------------------
* @param tabNavs : Object
* - 공통 탭 네비게이션 : tabHandler('.tabNav')
* - 컨텐츠 안 탭 네비게이션 : tabHandler('.tabNavSub')
*/
var tabHandler = function(tabNavs){
	// 스크롤 탭 포지셔닝
	if(($(tabNavs)).hasClass('tabOverflow')) scrollTabPosition();

	var tabList = $(tabNavs).find('li');

	//init
	tabList.each(function(){
		var $li =$(this)
			$a = $li.find(' > a')
			activeTabClass = 'is-on'
			activeConClass = 'is-current'
		;

		$a.attr('role', 'tab').attr('aria-selected', 'false');
		if($li.hasClass(activeTabClass)) $a.attr('title', '현재 탭').attr('aria-selected', true);

		//event
		$a.click(function(){
			if(!tabList.parents(tabNavs).hasClass('pageTab')){
				var tabId = $(this).parent().attr('data-tab');
				var tabConts = $(this).closest(tabNavs).siblings('.tabContent');

				tabList.removeClass(activeTabClass).find('>a').removeAttr('title').attr('aria-selected', false);
				$(this).parent().addClass(activeTabClass).find('>a').attr('title', '현재 탭').attr('aria-selected', true);

				tabConts.removeClass(activeConClass);
				$("#"+tabId).addClass(activeConClass);

				// return false; //2018.0810: 개발 요구로 삭제 
			}
		});
	});
};

// 스크롤 탭 포지셔닝
function scrollTabPosition(){
	var $scrollTab = $('.tabOverflow')
		, $target =$scrollTab.find('ul > li.is-on') 
		, goLeft = 0
		, intervalID
		, isAnimate = true
		, ifmoveOption = true // true : target이 화면 넘어 갈때만 이동, false : 항상 왼쪽 정렬
	;

	if( $target.index() == 0) return false;

	//로드 시점 차이로 인터벌 사용(팝업 및 컨텐트 로드 페이지 확인 필요)
	intervalID = setInterval(function(){
		goLeft = $target.offset().left;
		if(goLeft >= 0){
			clearInterval(intervalID);
			if(ifmoveOption){
				var docW = $(document).outerWidth();
				var targetW = $target.outerWidth();
				if(docW > (goLeft + targetW)) return false;
			}

			if(isAnimate) $scrollTab.stop().animate({'scrollLeft' : goLeft}, 'easeInOutExp');
			else $scrollTab.scrollLeft(goLeft);

			return false;
		}
	}, 360);

	return false;
}


/**
* accordion
* -----------------------------------------
* @param tabNavs : Object
*/
var accordionHandler = function(){
	// 공통 아코디언 시작
	// 꼭 알아두세요! 등의 페이지 아래에 붙는 정보성 아코디언 코딩시, dt에 js-active 클래스 추가할 것.
	$('.accordion > li').each(function(){
		var $accordionTitle = $(this).find('> dl > dt');
		var $aLink = $accordionTitle.find('> a');

		//init
		$aLink.attr('role', 'button'); 
		if($accordionTitle.hasClass('js-active') ){
			$aLink.attr('title', '접기');
			$('.js-active').siblings('dd').attr('style', 'display:block').removeClass('dp-block');
			$('.js-active').parent().parent().addClass('on');
		}else{
			$aLink.attr('title', '펼치기');
		}

		//event
		$aLink.off().click(function(){
			var $dt = $(this).parent();
			var $li = $dt.parent().parent();

			if( $dt.hasClass('js-active') ){
				$(this).attr('title', '펼치기');
				$dt.removeClass("js-active").siblings('dd').slideUp(200, function(){
					$(window).trigger("scroll");
				});
				$li.removeClass('on');
			}else{
				$(this).attr('title', '접기');
				$dt.addClass("js-active").siblings('dd').slideDown(200);
				$li.addClass('on');
				
				if($dt.addClass("js-active").siblings('dd').find(".iframeSwiper").length > 0){
					var src = $dt.addClass("js-active").siblings('dd').find(".iframeSwiper").attr("src");
					$dt.addClass("js-active").siblings('dd').find(".iframeSwiper").attr("src", src);
				}

				//펼치때 상단으로 이동 
				/*var scrollTopMargin = 0;
				if($('#wrap').find('header').length){
					scrollTopMargin = $('#wrap').find('header').outerHeight();
				}
				var goTop =$(this).offset().top -scrollTopMargin;
				$('body').stop().animate({scrollTop : goTop}, 'fast');*/
				
				if($dt.position().top > 0){
					$('body').stop().animate({scrollTop : $dt.position().top}, 'fast');
				}
				else {
					if($dt.offset().top > 0){
						$('body').stop().animate({scrollTop : $dt.offset().top}, 'fast');
					}
				}

			}
			return false;
		});
	});
};


/**
* UTIL
* -----------------------------------------
*/
$(document).ready(function(){
	
	// 공통 아코디언 시작
	accordionHandler();

	tabHandler('.tabNav');//공통 탭
	tabHandler('.tabNavSub');//컨텐츠 안 탭

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
	
	$('label > .btn').each(function(){
		if($(this).hasClass('subSmallType')) {
			$(this).parents('label').addClass('btnLabel');
		};
	});
	
	$('label').each(function(){
		if($(this).find('button.helpTooltip').length > 0) {
			$(this).addClass('tooltipLabel');
		};
	});
	
	$('.hashtag-btn').click(function(){
		$(this).toggleClass('on');
	});
	
});

var lastScrollTop = 0;
$(window).on('scroll',function(){
	var st = $(this).scrollTop();
	var bottomPos = $(document).height() - $(window).height();
	/*console.log($(document).height() + "::" + $(window).height());
	console.log("st : " + st);
	console.log("bottomPos :: " + bottomPos);*/
	if(st <= lastScrollTop){
	 $('.productBottom').removeClass('buttonOn'); // up
	}else if(st == bottomPos){
	 $('.productBottom').addClass('buttonOn');
	}else{
	 $('.productBottom').addClass('buttonOn'); // down
	}
	lastScrollTop = st;
});
//var lastScrollTop = 0;
$(window).on('scroll', function(){
	var st = $(this).scrollTop();
	var bottomPos = $(document).height() - $(window).height();
	
	/*
	 * 
	console.log($(document).height() + "::" + $(window).height());
	console.log("st : " + st);
	console.log("bottomPos :: " + bottomPos);
	console.log("st-bottomPos :: " + Math.abs(st-bottomPos));
	
	if(st <= lastScrollTop){
	 $('.productBottom').removeClass('buttonOn'); // up
	}else if(st == bottomPos){
	 $('.productBottom').addClass('buttonOn');
	}else{
	 $('.productBottom').addClass('buttonOn'); // down
	}
	lastScrollTop = st;
	
	*/

	if(st == bottomPos || Math.abs(st-bottomPos) < 10){
		$('.productBottom').addClass('buttonOn');
		$('.productBottom').css("height", "45px");
	}
	else{
		$('.productBottom').removeClass('buttonOn'); // down
		$('.productBottom').css("height", "0px");
	}
});
	
	
