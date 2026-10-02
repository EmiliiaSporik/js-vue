// function name(аргемент) {
//     код
// }

// function hello() {
//     alert("Hello world!");
// }
// hello();

// function showInfo(name, price = "немає в наявності", count) {
//     console.log("Маркет");
//     console.log("Графік роботи: 24/7")
//     console.log(`Товар ${name}, вартість ${price}`)
//     console.log(`Сума до оплати ${count * price}`)
// }
// showInfo("Чай", 10000, 4);

// function calculateTotal(price, total) {
//     let suma = price * total, discount, totalSuma;
//     if (suma >= 5000) {
//         discount = 0.1
//     }
//     else {
//         discount = 0
//     }
//     totalSuma = suma * (1 - discount);
//     return totalSuma;
// }
// let total = calculateTotal(500, 3)
// console.log(total)

// function showInfo(name, price = "немає в наявності", count) {
//     console.log("Маркет");
//     console.log("Графік роботи: 24/7");
// }
// function getProductTotal(price, count) {
//     return price * count;
// }
// function getDiscountPercent(total) {
//     if (total >= 10000) {
//         return 15;
//     } else if (total >= 5000) {
//         return 10;
//     } else if (total >= 2000) {
//         return 5;
//     } else {
//         return 0;
//     }
// }
// function getDiscountValue(total, percent) {
//     return total * percent / 100;
// }
// function getFinalPrice(total, discount) {
//     return total - discount;
// }
// let productName = prompt("Введіть назву товару")
// let productPrice = prompt("Введіть вартість товару");
// let productCount = prompt("Введіть кількість товару");
//
// let productTotal = getProductTotal(productPrice, productCount);
// let discountPercent = getDiscountPercent(productTotal);
// let discountValue = getDiscountValue(productTotal, discountPercent);
// let finalPrice = getFinalPrice(productTotal, discountValue);
//
// showInfo(productName, productPrice, productCount);
// console.log(`Товар: ${productName}`)
// console.log(`Ціна: ${productPrice} грн`);
// console.log(`Кількість: ${productCount} шт`);
// console.log(`Сума: ${productTotal} грн`);
// console.log(`Знижка: ${discountPercent} %`);
// console.log(`Сума знижка: ${discountValue} грн`);
// console.log(`До сплати: ${finalPrice} грн`);

//📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️ кінотеатр
// function calculateTickets(price, count) {
//     return price * count;
// }
//
// function getTicketDiscount(total) {
//     if (total >= 1500) {
//         return 15;
//     } else if (total >= 1000) {
//         return 10;
//     } else if (total >= 500) {
//         return 5;
//     } else {
//         return 0;
//     }
// }
//
// function calculateTicketDiscount(total, percent) {
//     return (total * percent) / 100;
// }
//
// function calculateTicketFinalPrice(total, discount) {
//     return total - discount;
// }
//
// let movieName = prompt("Введіть назву фільму:");
// let ticketPrice = +prompt("Введіть вартість одного квитка:");
// let ticketCount = +prompt("Введіть кількість квитків:");
//
// let total = calculateTickets(ticketPrice, ticketCount);
// let discountPercent = getTicketDiscount(total);
// let discountValue = calculateTicketDiscount(total, discountPercent);
// let finalPrice = calculateTicketFinalPrice(total, discountValue);
//
// console.log(`Фільм: ${movieName}`);
// console.log(`Ціна квитка: ${ticketPrice} грн`);
// console.log(`Кількість: ${ticketCount} шт`);
// console.log(`Загальна сума: ${total} грн`);
// console.log(`Знижка: ${discountPercent}%`);
// console.log(`Сума знижки: ${discountValue} грн`);
// console.log(`До сплати: ${finalPrice} грн`);
//📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️📽️ а зараз вже кінець фільму

//📲📲📲📲📲📲📲📲📲📲📲📲📲📲📲📲

let savedLogin, savedPassword;

function register() {
    savedLogin = prompt("Введіть логін");
    savedPassword = prompt("Введіть пароль");
    alert("Реєстрацію завершено");
}

function login() {
    let attempts = 3;

    while (attempts > 0) {
        let currentLogin = prompt("Введіть логін");
        let currentPassword = prompt("Введіть пароль");

        if (currentLogin === savedLogin && currentPassword === savedPassword) {
            alert("Вхід дозволено");
            break;
        } else {
            attempts = attempts - 1;
            if (attempts > 0) {
                alert(`Залишилось спроб: ${attempts}`);
            } else {
                alert("а нас тут просто кинули (доступ заблоковано)");
            }
        }
    }
}

let action;

do {
    action = prompt("Оберіть дію:\n1 - Реєстрація\n2 - Вхід\n0 - Вихід");

    if (action === "1") {
        register();
    } else if (action === "2") {
        login();
    } else if (action === "0") {
        alert("Сюжет закінчився (вихід)");
    } else {
        alert("Лише 1, 2 або 0");
    }

} while (action !== "0");
//📲📲📲📲📲📲📲📲📲📲📲📲📲📲📲📲