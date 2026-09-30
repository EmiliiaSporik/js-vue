let count = +prompt("Кількість учнів:");
let sum = 0;
let countHigh = 0;
let countLow = 0;
let maxGrade = 0;

for (let i = 1; i <= count; i++) {
    let grade = +prompt("Введіть оцінку учня " + i + ":");
    while (Number.isNaN(grade) || grade < 1 || grade > 12) {
        grade = +prompt("Помилка. Введіть оцінку ще раз");
    }
    sum = sum + grade;
    if (grade >= 7) {
        countHigh++;
    } else {
        countLow++;
    }
    if (grade > maxGrade) {
        maxGrade = grade;
    }

}
let average = sum / count;

console.log("Результат:");
console.log("Сума: " + sum);
console.log("Середня: " + average);
console.log("Оцінок 7 і вище: " + countHigh);
console.log("Оцінок нижче 7: " + countLow);
console.log("Найбільша оцінка: " + maxGrade);