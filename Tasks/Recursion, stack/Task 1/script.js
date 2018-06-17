function sumTo (n) {
	var result = 0;
	
	while (n) {
		    result = result + n ;
			n--;
	}
	return result;
}
alert ( sumTo(100) );
__________________________________________________________

function sumTo(n) {
	
	if ( n > 1) {
	return n + sumTo(n-1);
	}	
	else {
		return n;
	}
}
alert ( sumTo(100) );
___________________________________________________________

function sumTo(n) {
  return n * (n + 1) / 2;
}

alert( sumTo(100) );