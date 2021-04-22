"use strict";
/* Урок 3. Задание 1.
1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
 */

function getNumbers(minnum, maxnum){
    let arr = [];
    for (let i = 0; arr.length <= (maxnum - minnum); i++) {
        arr.push(minnum + i);
    }
    return arr;
}

let numArr = getNumbers(0, 10);

numArr.forEach(function (num) {
    if (num == 0) {
        console.log(`${num} - это ноль`)
    } else if ((num % 2) == 0){
        console.log(`${num} - четное число`)
    }
    else {
        console.log(`${num} - не четное число`)
    }
});





