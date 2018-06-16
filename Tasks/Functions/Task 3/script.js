var x = prompt( " Введите х ", " ");
var n = prompt( " Введите n ", " ");

function pow(x,n) {	
if ( n >= 1) {
	while (n) { 
		x = x * n;
		n--;
		return x;
	}
}
else {
	return " Только целые числа ";
}
}

alert ( pow(x,n) );