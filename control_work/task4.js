let carsCount = 0;
let electroCount = 0;
let totalSum = 0;
let maxCost = 0;

for (let i = 1; i <= 7; i++) {
    let hours = +prompt("Години стоянки авто " + i + " (0 - вихід):");

    if (hours === 0) {
        break;
    }

    if (hours < 0 || hours > 12) {
        continue;
    }

    let type = +prompt("Тип авто (1 - звичайний, 2 - електро):");
    let price = 0;

    if (type === 1) {
        price = 40;
    } else if (type === 2) {
        price = 30;
        electroCount++;
    } else {
        console.log("Помилка: неправильний тип автомобіля");
        continue;
    }

    let currentCost = hours * price;

    if (hours > 5) {
        currentCost = currentCost * 0.8;
    }

    carsCount++;
    totalSum = totalSum + currentCost;

    if (currentCost > maxCost) {
        maxCost = currentCost;
    }
}

console.log("Кількість правильно оброблених автомобілів: " + carsCount);
console.log("Кількість електромобілів: " + electroCount);
console.log("Загальна сума оплати: " + totalSum + " грн");
console.log("Найбільша оплата за один автомобіль: " + maxCost + " гнр");