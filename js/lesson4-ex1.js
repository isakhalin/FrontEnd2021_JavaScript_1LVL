"use strict";
/* Урок 4. Задание 1.
Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

class ObjCreate {
    constructor(arr) {
        this.units = arr[0];
        this.tens = arr[1];
        this.hundreds = arr[2];
    }
}

function getObj(randomNum) {
    let units = Math.round(randomNum / 10 % 10 * 10 % 10);
    let tens = Math.floor(randomNum / 10) % 10;
    let hundreds = Math.floor(randomNum / 100);
    return [units, tens, hundreds];
}

/**
 * Функция генерирует случйное число от 0 до 999
 * @returns {null|number}
 */
function getRandomNumber(){
    let randomNum = Math.floor(Math.random() * 1000);
    console.log(randomNum);
    if (randomNum < 0 && randomNum > 999) { //это если строка вместо числа
        console.log(`Неверное число. Введите число заново`);
        return randomNum = null;
    }  else {
        return randomNum;
    }
}

const Obj1 = new ObjCreate(getObj(getRandomNumber()))
console.log(Obj1)



