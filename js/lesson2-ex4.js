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

console.log(getSum(4, 5));
console.log(getDiff(4, 5));
console.log(getQuot(4, 5));
console.log(getProd(4, 5));