let age = +prompt("Ваш вік?");
let day = +prompt("Яикй день? (будній - 1 чи вихідний -2)");
let BasePrice = 0;
if (day === 1) {
    BasePrice = 200;
} else if (day === 2) {
    BasePrice = 250;
} else {
    console.log("Помилка: неправильний тип дня")
}

price = 0;
if (age >= 0 && age <= 7) {
    price = 0;
} else if (age >= 8 && age <= 17) {
    price = BasePrice * 0.5;
} else if (age >= 18 && age <= 59) {
    price = BasePrice;
} else if (age >= 60) {
    price = BasePrice * 0.4;
} else {
    console.log("Неправильний вік")
}
console.log("Вік: " + age);
console.log("День: " + day);
console.log("Результвт: " + price);