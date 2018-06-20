function truncate(str, maxlength) {
	if( maxlength < str.length ) {
		str = str.slice( 0, maxlength - 3 ) + "...";
		alert (str);
	}
	else {
		alert (str);
	}
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) 

truncate("Всем привет!", 20)