"use strict";

function getCurrency() {
    //let length = answer.length();
    let lastsymbol = answer.charAt(answer.length - 1); //3
    let penultsymbol = answer.charAt(answer.length - 2); //13

    switch (lastsymbol) {
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            alert(`На ваш счет зачислено ${answer} рублей`);
            break;

        case '2':
        case '3':
        case '4':
            if (penultsymbol == '1') {
                 alert(`На ваш счет зачислено ${answer} рублей`);
            } else
                alert(`На ваш счет зачислено ${answer} рубля`);
            break;

        case '1':
            if (penultsymbol == '1') {
                 alert(`На ваш счет зачислено ${answer} рублей`);
            } else
                alert(`На ваш счет зачислено ${answer} рубль`);
            break;
    }
}

let answer = prompt('Введите сумму, которую вы хотите внести на счет');
getCurrency();
//alert('На ваш счет зачислено ${answer} ${getCurrency()}');