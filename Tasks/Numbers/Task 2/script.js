function getDecimal(num) {
	if (num < 0){
		num = num * (-1);
		num = num - ~~num;
		return ( Math.round(num * 1000) / 1000  );
	}
	
	else {
	num = num - ~~num;
	return ( Math.round(num * 1000) / 1000 );
	}
}
alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2