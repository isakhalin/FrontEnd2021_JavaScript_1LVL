"use strict";

/**
 * Функция возвращает сумму двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат сложения
 */
function getSum (num1, num2) {
    return num1 + num2;
}
/**
 * Функция возвращает разность двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат вычитания
 */
function getDiff (num1, num2) {
    return num1 - num2;
}

/**
 * Функция возвращает частное двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат деления
 */
function getQuot (num1, num2) {
    return num1 / num2;
}

/**
 * Функция возвращает произведение двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Результат произведения
 */
function getProd (num1, num2) {
    return num1 * num2;
}


function mathOperation(num1, num2, operation){
        switch (operation) {
            case "getSum":
                return getSum(num1, num2);
            }

        switch (operation) {
            case "getDiff":
                return getDiff(num1, num2);
            }

        switch (operation) {
            case "getQuot":
                return getQuot(num1, num2);
        }

        switch (operation) {
            case "getProd":
                return getProd(num1, num2);
        }
    }

console.log(mathOperation(1, 5, "getProd"));