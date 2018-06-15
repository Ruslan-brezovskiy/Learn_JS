var login = prompt(" Кто пришёл? ", " " );

if (login == "Админ") {
	var pass = prompt(" Введите пароль "," ");
	
	if (pass == "Чёрный Властелин") {
		alert(" Добро Пожаловать! ");
	}
	else if (pass == null){
		alert(" Отмена ");
	}
	else {
		alert(" Пароль неверен");
	}
}
else if (login == null) {
	alert(" Вход отменён ");
}
else{
	alert(" Я вас не знаю ");
}