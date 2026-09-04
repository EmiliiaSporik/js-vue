//> >= < <= == === != !==

// let a, b;
// a = '1';
// b = 1;
// console.log(a == b);

// if (умова) {
//     команди;
// }

// let temp = prompt("Enter a temperature number");
// let result;
//
// if (temp <= 0) {
//     result = 'холодно';
// }
// else if (temp > 0 && temp <= 10) {
//     result = 'норм';
// }
// else if (temp > 10) {
//     result = 'жарко';
// }
// alert(result);

//______________________________________-
// let number = prompt("Enter your number");
// if (number % 2 === 0) {
//     alert("парне");
// }
// else {
//     alert("непарне");
// }
//______________________________________-

// const login = "admin";
// const password = "12345";
//
//
// let userLogin = prompt("Enter your login");
// let userPassword = prompt("Enter your password");
//
// if (userLogin === login && userPassword === password) {
//     alert("Вхід дозволений");
// }
// else {
//     alert("невірний пароль або логін");
// }

// courier 200
// post 100
// pickup 0
// let cost, deliver = prompt("Яка доставка?");
// switch (deliver) {
//     case "courier":
//         cost = 200;
//         break;
//     case "post":
//         cost = 100;
//         break;
//     case "pickup":
//         cost = 0;
//         break;
//
//     default:
//         cost = "n/a";
// }
//
// console.log(cost);


//______________________________________-
// let day, count = prompt("Який день?");
// switch (count) {
//     case "1":
//         day = "понеділок";
//         break;
//     case "2":
//         day = "вівторок";
//         break;
//     case "3":
//         day = "середа";
//         break;
//     case "4":
//         day = "четвер";
//         break;
//     case "5":
//         day = "п'ятниця";
//         break;
//     case "6":
//         day = "субота";
//         break;
//     case "7":
//         day = "неділя";
//         break;
//
//
//     default:
//         day = "вкажіть 1/2/3/4/5/6/7";
// }
//
// console.log(day);
//______________________________________-

let productName = prompt("Enter your product name");
let productPrice = + prompt("Enter your product price");
let productCount = + prompt("Enter your product count");

let hasCard = confirm("Чи є у вас дисконтна карта?"); //10%
let deliveryType = prompt("Enter your delivery type: courier, post, pickup");
let totalPrice, discount = 0;
totalPrice = productPrice * productCount;
if (totalPrice > 2000) {
    discount = 0.1
}
else if (totalPrice > 1000) {
    discount = 0.05
}
if (hasCard) {
    totalPrice = (totalPrice - (totalPrice * discount)) - (totalPrice * 0.1);
}
else {
    totalPrice = totalPrice - (totalPrice * discount);
}
switch (deliveryType) {
    case "courier":
        deliveryCost = 200;
        break;
    case "post":
        deliveryCost = 100;
        break;
    case "pickup":
        deliveryCost = 0;
        break;
    default:
        deliveryCost = 0;
}

totalPrice = totalPrice + deliveryCost;

alert(`Назва: ${productName}\n` +
    `Ціна: ${productPrice} грн\n` +
    `Кількість: ${productCount} шт.\n` +
    `Разом: ${totalPrice} грн`);

