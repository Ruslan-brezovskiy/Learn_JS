function checkSpam(str) {
	var target1 = "xxx";
	var target2 = "viagra";
	
	str = str.toLowerCase();
	if( ~str.indexOf(target1)) {
		alert(" Совпадение есть! ");
	}
	else if( ~str.indexOf(target2)) {
		alert(" Совпадение есть! ");
	}
	else {
		alert(" Совпадений нет ");
	}
}
checkSpam('buy ViAgRA now') 
checkSpam('free xxxxx') 
checkSpam("innocent rabbit") 