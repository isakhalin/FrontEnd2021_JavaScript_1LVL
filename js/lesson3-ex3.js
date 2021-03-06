"use strict";
/* Урок 3. Задание 3.
Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%,
можете использовать метод forEach https://mzl.la/1AOMMWX :
 */

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (sale) {
    //Скидка для выборочных товаров
    // if (sale.id == 4 || sale.id == 1) {
    //     sale.price = sale.price * 0.85;
    // }
    //Скидка для всех товаров
    sale.price = sale.price * 0.85;
})

console.log(products);