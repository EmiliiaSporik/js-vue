// let age = prompt("Enter your age");
// let register = confirm("Are you registred?");
// if (age >= 18 && register === true) {
//     alert("Дозволено")
// }
// else {
//     alert("Ви ще малі")
// }

// let role = prompt("Who you?")
// if (role === "teacher" || role === "admin") {
//     alert("Дозволено")
// }
// else {
//     alert("Недоступно")
// }


// let registeration = confirm("Are you registered?");
// let age = prompt("Please enter your age number");
// if (registeration) {
//     if (age >= 18) {
//         alert("Дозволено")
//     }
//     else {
//         alert("Недоступно")
//     }
// }
// else {
//     alert("Зарєструтесь, будь ласка")
// }
//90 - 100
//89 - 70
// 69- 60 задовільно
// 59 - 0 незадовільно


// let grade = +prompt("What is your grade?");
// if (grade >= 90) {
//     alert("Відмінно");
// }
// if (grade >= 70) {
//     alert("Добре");
// }
// if (grade >= 60) {
//     alert("Задовільно");
// }
// else{
//     alert("Work more");
// }

// teacher/student

// let role = prompt("Who are you?");
// let subscribe, blocked;
// if (role === "teacher") {
//     blocked = confirm("Your account blocked?")
//     if (!blocked) {
//         alert("Ласково просимо")
//     }
//     else {
//         alert("Недоступно")
//     }
// }
// else if (role === "student") {
//     blocked = confirm("Your account blocked?")
//     if (!blocked) {
//         subscribe = confirm("Do you have subscribed to your account?")
//         if (subscribe) {
//             alert("Ласково просимо")
//         }
//         else {
//             alert("Демо версія")
//         }
//     }
//     else {
//         alert("Недоступно")
//     }
// }
// else {
//     alert("Доступ недозволений")
// }


//запитуємо назву, вартість, кількість за 1 шт
// знижка якщо - зареєстрований, сума 1000 і більше, є промокод sale або віп статус = 10 відсотків
const sale = "sale";
const discount = 0.1;
let sum;
let name = prompt("Product Name");
let price = prompt("Product Price");
let count = prompt("Product Count");
sum = price * count;
let access = confirm("Product Access");
if (access && sum >= 1000 && (prompt("enter promocode") === sale || confirm("Do you have a vip?"))) {
    alert("You have a discount:" + (sum - (sum * discount)) + "%");
}
else {
    alert("Your total price is: " + price);
}