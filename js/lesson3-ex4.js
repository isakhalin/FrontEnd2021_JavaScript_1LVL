"use strict";
/* Урок 3. Задание 4
Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ ,
как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
 */

const products = [
    // [123, 123],

    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg",]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhoto = products.filter(function (product) {
    if (product.hasOwnProperty("photos") === true) {
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //Объясните, пожалуйста, почему так не работает:
        //return {product.photos.lenght > 0};

        // а так работает:
        if (product.photos.length > 0) {
            return product;
        }

    }
});

console.log(productsWithPhoto);

//Сортировка массива по свойству объекта price
console.log(products.sort(function (a, b) {
    return a.price - b.price;
}));


//Урок 3. Пример 5
function getNumbers(i) {

    console.log(i);
    return i;
}

for (let i = 0; i <= 9 ; getNumbers(i++)) {}

//Урок 3. Пример 6
let symbols = '';
for (let i = 0; i <= 20; i++) {
    console.log(symbols += 'X');
}