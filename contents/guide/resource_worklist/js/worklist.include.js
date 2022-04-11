/**
* worklist.include
* --------------------------------------
* @version 2.0.0
* @author Goang
* @modify 170310
*/


/**
* include
* --------------------------------------
*/

function inc_linkInfo(){
	var linkPath = '../../../';
	var linkPath_mo = '../../../App/';
	var getHost = location.host.split(':')[0];
	if(getHost =='10.2.22.51'){
		linkPath = 'http://'+getHost+':80/';
		linkPath_mo = 'http://'+getHost+':9090/';
		$('.asis_section').hide();
	}

	// if(location.protocol.substr(0,4) == "http"){
	// 	$('.asis_section').hide()
	// }


	var str='';
	str+='<h2>Link info.</h2>';
	str+='<table width="" summary="링크관련">';
	str+='<caption>링크관련</caption>';
	str+='<colgroup>';
	str+='	<col width="110px" />';
	str+='	<col width="480px" />';
	str+='</colgroup>';
	str+='<tbody>';
	str+='	<tr>';
	str+='		<th scope="row">Worklist</th>';
	str+='		<td class="tobe_section">';
	str+='			<div>';
	// str+='				<a href="'+linkPath+'/index.html" class="btn"><span>allOne</span></a>';
	str+='				<a href="javascript:void(0);" class="btn"><span>allOne</span></a>';
	str+='				<a href="javascript:void(0);" class="btn"><span>Admin</span></a>';
	str+='			</div>';
	str+='		</td>';
	str+='	</tr>';
	str+='	<tr>';
	str+='		<th scope="row">Guide</th>';
	str+='		<td class="guide_section">';
	str+='			<div>';
	// str+='				<a href="'+linkPath+'Publishing_Style_Guide.html" class="btn"><span>Style_Guide</span></a>';
	str+='				<a href="./Publishing_Style_Guide.html" class="btn" target="_blank"><span>Style_Guide</span></a>';
	str+='				<a href="./Publishing_Theme_Guide.html" class="btn" target="_blank"><span>Theme_Guide</span></a>';
	str+='				<a href="./Publishing_Coding_Convention.html" class="btn" target="_blank"><span>Coding_Convention</span></a>';
	str+='				<a href="./directory_map.html" class="btn" target="_blank"><span>directory_map</span></a>';
	str+='			</div>';
	str+='		</td>';
	str+='	</tr>';
	//  AS-IS
	str+='	<tr>';
	str+='		<th scope="row">AS-IS</th>';
	str+='		<td class="asis_section">';
	str+='			<div>';
	str+='				<a href="../../../../02.Publish_Asis/index.html" class="btn"><span>2017.allOne</span></a>';
	str+='		</td>';
	str+='	</tr>';
	//  Dev
	/*str+='	<tr>';
	str+='		<th scope="row">Dev</th>';
	str+='		<td class="link_section">';
	str+='			<div>';
	str+='				<a href="https://dobiz.kbstar.com/quics?page=C019328#CPl" target="_blank" class="btn"><span>기업뱅킹</span></a>';
	str+='				<a href="https://docms.kbstar.com/quics?page=ocms&QSL=F#loading" target="_blank" class="btn"><span>KB Star CMS</span></a>';
	str+='				<a href="http://admin.kbstar.com/quics?page=B006012" target="_blank" class="btn"><span>통합어드민</span></a>';
	str+='		</td>';
	str+='	</tr>';*/
	str+='</tbody>';
	str+='</table>';
	document.write(str);
}


function inc_filter(){
	var str='';
	str+='		<h2>Filter.</h2>';
	str+='		<table width="" summary="퍼블리싱 문서 규격 및 크로스브라우징 관련">';
	str+='		<caption>문서 정보</caption>';
	str+='		<colgroup><col width="110px" /><col width="480px" /></colgroup>';
	str+='		<tbody>';
	str+='			<tr>';
	str+='				<th><span class="total_rate">&nbsp;<span></th>';
	str+='				<td class="filter_btn">';
	str+='					<a href="javascript:void(0);" class="del btn bullet" title="del"><span>삭제</span></a>';
	str+='					<a href="javascript:void(0);" class="equal btn bullet" title="equal"><span>동일</span></a>';
	str+='					<a href="javascript:void(0);" class="hold btn bullet" title="hold"><span>보류</span></a>';
	str+='					<a href="javascript:void(0);" class="rework btn bullet" title="rework"><span>재확인</span></a>';
	// str+='					<a href="javascript:void(0);" class="layer btn bullet" title="layer"><span>레이어</span></a>';
	str+='					<a href="javascript:void(0);" class="popup btn bullet" title="popup"><span>팝업</span></a>';
	str+='					<a href="javascript:void(0);" class="new btn bullet" title="new"><span>우선</span></a>';
	str+='					<a href="javascript:void(0);" class="result btn bullet" title="result"><span>완료</span></a>';
	str+='					<a href="javascript:void(0);" class="result_ex btn bullet" title="result_ex"><span>미완</span></a>';
	str+='					<a href="javascript:void(0);" class="total btn bullet on" title="total"><span>Total</span></a>';
	str+='					<a href="javascript:void(0);" class="real btn bullet" title="real"><span>삭제제외</span></a>';
	str+='				</td>';
	str+='			</tr>';
	str+='			<tr>';
	str+='				<th><label for="id_search">Search</label></th>';
	str+='				<td class="search">';
	str+='					<input type="text" name="search" value="" id="id_search" placeholder="Search" />';
	str+='				</td>';
	str+='			</tr>';
	str+='		</tbody>';
	str+='		</table>';
	document.write(str);
}

function inc_IAHead(){
	var str='';
	str+='<caption>작업 리스트</caption>';
	str+='<colgroup>';
	str+='	<col width="3%" /><!-- 번호 -->';
	str+='	<col class="depth2" style="width:8%" /><!-- 2Depth -->';
	str+='	<col class="depth3" style="width:13%" /><!-- 3Depth -->';
	str+='	<col class="depth4" style="width:13%" /><!-- 4Depth -->';
	str+='	<col class="depth5" style="width:15%" /><!-- 5Depth -->';
	str+='	<col class="page" style="width:10%" /><!-- 메뉴명 -->';
	str+='	<col class="path" style="width:8%" /><!-- 경로 -->';
	str+='	<col class="path_asis" style="width:8%" /><!-- 경로 -->';
	str+='	<col class="planner" style="width:4%" /><!-- 기획자 -->';
	str+='	<col class="corder" style="width:4%" /><!-- 작업자 -->';
	str+='	<col class="rdate" style="width:4%" /><!-- 완료일 -->';
	str+='	<col class="mdate" style="width:4%" /><!-- 수정일 -->';
	str+='	<col class="mdate" style="width:4%" /><!-- 기획검수 -->';
	str+='	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str+='</colgroup>';
	str+='<thead>';
	str+='	<tr>';
	str+='		<th scope="col" class="num">번호</th>';
	str+='		<th scope="col" class="depth2">2Depth</th>';
	str+='		<th scope="col" class="depth3">3Depth</th>';
	str+='		<th scope="col" class="depth4">4Depth</th>';
	str+='		<th scope="col" class="depth5">5Depth</th>';
	str+='		<th scope="col" class="page">메뉴명</th>';
	str+='		<th scope="col" class="path">경로</th>';
	str+='		<th scope="col" class="path_asis">AS-IS</th>';
	str+='		<th scope="col" class="planner">기획자</th>';
	str+='		<th scope="col" class="corder">작업자</th>';
	str+='		<th scope="col" class="rdate">완료일</th>';
	str+='		<th scope="col" class="mdate">수정일</th>';
	str+='		<th scope="col" class="ptest">검수</th>';
	str+='		<th scope="col" class="etc">비고</th>';
	str+='	</tr>';
	str+='</thead>';
	document.write(str);
}

function inc_IAHead_guide(){
	var str='';
	str+='<caption>작업 리스트</caption>';
	str+='<colgroup>';
	str+='	<col width="3%" /><!-- 번호 -->';
	str+='	<col class="depth2" style="width:10%" /><!-- 2Depth -->';
	str+='	<col class="depth3" style="width:10%" /><!-- 3Depth -->';
	str+='	<col class="depth4" style="width:10%" /><!-- 4Depth -->';
	str+='	<col class="depth5" style="width:10%" /><!-- 5Depth -->';
	str+='	<col class="page" style="width:13%" /><!-- 메뉴명 -->';
	str+='	<col class="path" style="width:12%" /><!-- 경로 -->';
	str+='	<col class="corder" style="width:4%" /><!-- 작업자 -->';
	str+='	<col class="rdate" style="width:5%" /><!-- 완료일 -->';
	str+='	<col class="mdate" style="width:5%" /><!-- 수정일 -->';
	str+='	<col class="etc" style="width:auto" /><!-- 비고 -->';
	str+='</colgroup>';
	str+='<thead>';
	str+='	<tr>';
	str+='		<th scope="col" class="num">번호</th>';
	str+='		<th scope="col" class="depth2">2Depth</th>';
	str+='		<th scope="col" class="depth3">3Depth</th>';
	str+='		<th scope="col" class="depth4">4Depth</th>';
	str+='		<th scope="col" class="depth5">5Depth</th>';
	str+='		<th scope="col" class="page">메뉴명</th>';
	str+='		<th scope="col" class="path">경로</th>';
	str+='		<th scope="col" class="corder">작업자</th>';
	str+='		<th scope="col" class="rdate">완료일</th>';
	str+='		<th scope="col" class="mdate">수정일</th>';
	str+='		<th scope="col" class="etc">비고</th>';
	str+='	</tr>';
	str+='</thead>';
	document.write(str);
}

