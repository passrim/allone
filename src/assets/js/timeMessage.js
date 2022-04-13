/********************************************************************************
* LOGIN TIME MESSAGE
********************************************************************************/
$TIME_MESSAGE = {
	getTimeMessage : function(){
		var date = new Date();
		var currentTime = Number(String(date.getHours()) + String(date.getMinutes()));

		var message = "";
		if( 0 <= currentTime && currentTime <= 559){
			message = "오늘도 행복충전";
		}
		else if(600 <= currentTime && currentTime <= 859) {
			message = "안녕하세요.";
		}
		else if(900 <= currentTime && currentTime <= 1059) {
			message = "늘 고맙습니다.";
		}
		else if(1100 <= currentTime && currentTime <= 1259) {
			message = "행복하세요.";
		}
		else if(1100 <= currentTime && currentTime <= 1659) {
			message = "항상 응원합니다.";
		}
		else if(1700 <= currentTime && currentTime <= 1959) {
			message = "아자! 힘내세요.";
		}
		else {
			message = "행복한 저녁되세요.";
		}
		
		return message;
	}
};