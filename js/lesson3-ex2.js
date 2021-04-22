"use strict";
/* Урок 3. Задание 2
Выведите в консоль значения, указанные рядом с комментариями:
 */

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

console.log(`Пост втора ${post.author} получил комментарий от пользоватея ${post.comments[0].userName}, у которого ${post.comments[0].rating.dislikes} дизлайка.
Пользователь с ID ${post.comments[1].userId} оставил комментарий: "${post.comments[1].text}".`);