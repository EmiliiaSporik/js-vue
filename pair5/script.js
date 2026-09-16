// let num = 1;
// while (num <= 5) {
//     console.log(num);
//     num ++;
// }

// let usernumber = +prompt("Enter your number");
// while (usernumber < 1 || usernumber > 10) {
//     usernumber = +prompt("Error. Enter your number");
//     console.log("error");
// }

// console.log(Number("8"));
// console.log(Number("hi"));

// let age = +prompt("Enter your age");
// while (Number.isNaN(age) || age < 0 || age >= 100) {
//     age = +prompt("Error. Enter your age");
// }
// console.log(age);

// const correctPin = 1234;
//
// let userPin = +prompt("Enter your pin");
// let attempts = 1;
// while (correctPin !== userPin && attempts < 3) {
//     userPin = +prompt("Error. Enter your pin");
//     attempts++;
// }
//
// if (userPin === correctPin) {
//     console.log("Welcome");
// }
// else{
//     console.log("Blocked");
// }

// const correctPin = 1234;
// let attempts = 1;
// while (attempts <= 3) {
//     let userPin = +prompt("Error. Enter your pin")
//     if (userPin === correctPin) {
//         console.log("Welcome");
//         break;
//     }
//     console.log(userPin)
//     attempts++;
// }

// let menuChoice;
//
// do {
//     menuChoice = prompt("What would you like to do? \n" +
//         "1 - переглянути профіль \n" +
//         "2 - налаштування \n" +
//         "3 - статистика \n" +
//         "0 - вихід");
//         if (menuChoice === "1") {
//             console.log("Відкриваємо профіль")
//         } else if (menuChoice === "2") {
//             console.log("Відкриваємо налаштування")
//         } else if (menuChoice === "3") {
//             console.log("Відкриваємо статистику")
//         } else if (menuChoice === "4") {
//             console.log("Вийти")
//         } else {
//             console.log("вибір не правильний")
//         }
// } while (menuChoice !== "0");

//⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡
// let menuChoice;
//
// do {
//     menuChoice = prompt("What would you like to do? \n" +
//         "1 - переглянути профіль \n" +
//         "2 - налаштування \n" +
//         "3 - статистика \n" +
//         "0 - вихід");
//     switch (menuChoice) {
//         case "1":
//             console.log("Відкриваємо профіль");
//             break;
//         case "2":
//             console.log("Відкриваємо налаштування");
//             break;
//         case "3":
//             console.log("Відкриваємо статистику");
//             break;
//         case "0":
//             console.log("Вийти");
//             break;
//         default:
//             console.log("вибір не правильний");
//             break;
//     }
// } while (menuChoice !== "0");
//⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡

// let count = 0;
// let sum = 0;
// while (count < 5) {
//     let grade = +prompt(`введи оцінку №${count + 1}`);
//     if (!Number.isInteger(grade) || grade < 1 || grade > 12) {
//         alert("не коректна оцінка. введи ще раз")
//         continue
//     }
//     sum += grade;
//     count++;
// }
// console.log(sum);
// console.log(sum / 5);

// let questionsNumber = 1, score = 0;
// while (questionsNumber <= 5) {
//     let question = " ", correctAnswer = " ";
//     switch (questionsNumber) {
//         case 1:
//             question = "Ключове слово для створення змінної";
//             correctAnswer = "let"
//             break;
//         case 2:
//             question = "оператор and"
//             correctAnswer = "&&"
//             break;
//         case 3:
//             question = "оператор or"
//             correctAnswer = "||"
//             break;
//         case 4:
//             question = "як зупинити цикл"
//             correctAnswer = "break"
//             break;
//         case 5:
//             question = "строга рівність позначається..."
//             correctAnswer = "==="
//             break;
//     }
//     let answer = prompt(`Запитання №${questionsNumber} із 5 \n${question}`);
//     if (answer === "") {
//         alert("відповідь не може бути пустою")
//         continue;
//     }
//     if (answer === correctAnswer) {
//         alert("вірно")
//         score++;
//     }
//     else {
//         alert("не вірно")
//     }
//     questionsNumber++;
// }
// if (score === 5) {
//     alert("молодець");
// } else if (score >= 3) {
//     alert("okey")
// }
// else {
//     alert("вчись більше")
// }


//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
let age = +prompt("Введіть свій вік");

while (Number.isNaN(age) || age < 12 || age > 90) {
    age = +prompt("Помилка. Введіть свій вік ще раз");
}

const correctPin = 4321;
let attempts = 1;
let access = false;

while (attempts <= 3) {
    let userPin = +prompt("Введіть PIN");
    if (userPin === correctPin) {
        access = true;
        break;
    }
    attempts++;
}

if (access) {
    let menuChoice;
    do {
        menuChoice = prompt(
            "1 - Особистий кабінет \n" +
            "2 - Повідомлення \n" +
            "3 - Налаштування \n" +
            "0 - Вихід"
        );
        switch (menuChoice) {
            case "1":
                console.log("Особистий кабінет");
                break;
            case "2":
                console.log("Повідомлення");
                break;
            case "3":
                console.log("Налаштування");
                break;
            case "0":
                console.log("Вихід");
                break;
            default:
                console.log("Такого пункту немає.");
                break;
        }
    } while (menuChoice !== "0");
} else {
    console.log("Blocked");
}
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐