"use strict";
/* Урок 4. Задание 1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit,
который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post,
чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
 */

///////////////ES5
// function Post(author, text, date) {
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }
//
// Post.prototype.edit = function (post) {
//     this.text = post;
// }
//
// function AttachedPost(author, text, date) {
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }
//
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
//
// AttachedPost.prototype.makeTextHighlighted = function () {
//     this.highlighted = true;
//}
///////////////ES5

///////////////ES6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit = function (post) {
        this.text = post;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted = function () {
    this.highlighted = true;
    }
}

///////////////ES6

const post1 = new Post('Pushkin', 'У лукоморья дуб зеленый', `1828 Год`);
post1.edit('У лукоморья дуб зеленый, златая цепь на дубе том.');
console.log(post1.text);

const hpost1 = new AttachedPost('Pushkin', 'У лукоморья дуб зеленый', `1828 Год`);
console.log(hpost1); //Прошу подсказать, почему когда стоят точки остановки в режиме разработки, console.log показывает значение highlighted false,
                        //а когда не стоят точки остановки, то показывает true

hpost1.makeTextHighlighted();

console.log(hpost1);




