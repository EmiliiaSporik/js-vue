let count = 0, free = 0, discount = 0, full = 0, sum = 0, price = 0;

let event = +prompt("Оберіть подію: \n1 - кіно (150 грн) \n2 - театр (220 грн) \n3 - концерт (350 грн)");
while (event < 1 || event > 3) {
    event = +prompt("Помилка! Введіть 1, 2 або 3:");
}
switch (event) {
    case 1:
        price = 150;
        break;
    case 2:
        price = 220;
        break;
    case 3:
        price = 350;
        break;
}

let day = +prompt("Який день? \n1 - будній \n2 - вихідний");
while (day < 1 || day > 2) {
    day = +prompt("Помилка! Введіть 1 або 2:");
}

if (day === 2) {
    price *= 1.15;
}

let amount = +prompt("Скільки квитків? (від 1 до 6)");
while (amount < 1 || amount > 6) {
    amount = +prompt("Помилка! Введіть від 1 до 6:");
}

for (let i = 1; i <= amount; i++) {
    let age = +prompt(`Квиток №${i}. Введіть вік (або -1 для виходу):`);

    while (age < -1 || age > 100) {
        age = +prompt("Помилка! Введіть правильний вік:");
    }

    if (age === -1) {
        console.log("Оформлення зупинено");
        break;
    }

    count++;
    let cost = price;
    let isFree = false, isDiscount = false;

    if (age >= 0 && age <= 5) {
        isFree = true;
    } else if (age >= 6 && age <= 12) {
        cost *= 0.50;
        isDiscount = true;
    } else if (age >= 13 && age <= 17) {
        cost *= 0.80;
        isDiscount = true;
    } else if (age >= 60) {
        cost *= 0.75;
        isDiscount = true;
    } else if (age >= 18 && age <= 25) {
        let student = confirm("Є студентський?");
        if (student) {
            cost *= 0.90;
            isDiscount = true;
        }
    }

    if (isFree) {
        free++;
        continue;
    }

    if (isDiscount) {
        discount++;
    } else {
        full++;
    }

    sum += cost;
}

if (sum > 1000) {
    sum *= 0.95;
    console.log("Супер! Ви отримали додаткову знижку 5%!");
}

console.log("Оброблено квитків: " + count);
console.log("Безкоштовних: " + free);
console.log("Зі знижкою: " + discount);
console.log("За повну ціну: " + full);
console.log("До сплати: " + sum + " грн");