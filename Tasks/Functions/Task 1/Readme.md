### Задание: 
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:
1. Используя оператор '?'
2. Используя оператор ||

* function checkAge(age) {
*   if (age > 18) {
*    return true;
*   } else {
*     return confirm('Родители разрешили?');
*   }
* }
***