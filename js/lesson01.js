"use strict";

//Урок 1. Задание 1.
let tempCels = +prompt('Введите температуру по цельсию');
let tempfar = (9 / 5) * tempCels + 32;

alert('Температура по Фарингейту: ' + tempfar);

//Урок 1. Задание 2.
let admin = 'Василий';
let name = admin;

console.log(name);

//Урок 1. Задание 3.

//В данном случае операторы выполняются слева направо.
//Первый оператор будет складывать число 10 с 10,
//а второй оператор пытается выполнить конкатенацию результата сложения первого оператора со строкой "10".
//В итоге получим 2010.
console.log(10 + 10 + "10");

//В данном случае операторы выполняются слева направо.
//Первый оператор будет конкатенировать с "10" т.к. это строка, следующий оператор будет так же конкатенировать с 10.
//В итоге получим 101010.
console.log(10 + "10" + 10);

//В данном случае операторы выполняются слева направо.
//Первый оператор будет складывать число 10 с 10, далее унарный плюс приведет строку к числу 10, а затем второй оператор сложит числа.
//В итоге получим 30.
console.log(10 + 10 + +"10");

//Пустая строка в правом операнде приводится сначала к булеву значению false, далее булевый false приводится к нулю,
//далее унарный минус делает значение отрицательным. Т.к. результатом деления на ноль является infinity, в при делении на -0 получим -infinity.
console.log(10 / -"");

//Унарный плюс приводит правый операнд к числовому значению, а т.к. используется запятая вместо точки,
//то привести к числу не получается и получаем NaN. При деление любого значния на NaN всегда получаем NaN.
console.log(10 / +"2,5");
//Внесены изменения
