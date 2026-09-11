// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i+= 2) {
//     console.log(i);
// }

// for (let i = 20; i > 0; i--) {
//     console.log(i);
// }


// let count = 0;
// for (let i = 20; i > 0; i--) {
//     count+= i;
// }
// console.log(count);

// let sum = 0;
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum);


//---------------------
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
//---------------------


// for(let i = 1; i<= 100; i++) {
//     if (i > 25 && i % 4 === 0 && i % 6 === 0) {
//         console.log(i);
//         break
//     }
// }

// for (let i = 1; i <= 30; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// let student = +prompt("How many students?");
// let sum = 0, goodGrade = 0, badGrade = 0, maxGrade = 12, minGrade = 0;
// for (let i = 1; i <= student; i++) {
//     let grade = +prompt("Enter student grade");
//     if (!(grade >= 1 && grade <= 12)) {
//         alert("Error")
//         i--;
//         continue;
//     }
//     sum += grade;
//     if (i>=7) {
//         goodGrade++;
//     }
//     else {
//         badGrade++;
//     }
//     if (grade > maxGrade) {
//         maxGrade = grade;
//     }
//     if (grade < minGrade) {
//         minGrade = grade;
//     }
// }
// console.log(sum);
// console.log(goodGrade);
// console.log(badGrade);
// console.log(maxGrade);
// console.log(minGrade);


//---------------------------------------
let student = +prompt("How many students?");

let sum = 0;
let excellentGrade = 0, goodGrade = 0, badGrade = 0;
let maxGrade = 0, minGrade = 100;
let first100 = 0;

for (let i = 1; i <= student; i++) {
    let grade = +prompt(`Enter grade for student ${i}:`);
    if (!(grade >= 0 && grade <= 100)) {
        alert("Error");
        i--;
        continue;
    }
    sum += grade;
    if (grade >= 90 && grade <= 100) {
        excellentGrade++;
    }
    else if (grade >= 60 && grade < 90) {
        goodGrade++;
    }
    else {
        badGrade++;
    }
    if (grade > maxGrade) {
        maxGrade = grade;
    }
    if (grade < minGrade) {
        minGrade = grade;
    }
    if (grade === 100 && first100 === 0) {
        first100 = i;
    }
}

let average = sum / student;

console.log(average);
console.log(excellentGrade);
console.log(goodGrade);
console.log(badGrade);
console.log(maxGrade);
console.log(minGrade);
if (first100 !== 0) {
    console.log(first100);
}
// ---------------------------------------