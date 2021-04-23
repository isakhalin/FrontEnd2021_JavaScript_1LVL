"use strict";
/* Урок 4. Задание 1.1
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта.
Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
 */

///////////////ES5
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// Product.prototype.makePercentDiscount = function(discount) {
//     this.price *= (discount / 100);
// }
//
// const product1 = new Product('shoes', 120);
//
///////////////ES5



///////////////ES6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    makePercentDiscount = function(discount) {
        this.price *= (discount / 100);
    }
}
////////////////ES6

const product1 = new Product('shoes', 120);

console.log(product1);

//Вызывает метод объекта с указанной скидкой
product1.makePercentDiscount(50);

console.log(product1.price);