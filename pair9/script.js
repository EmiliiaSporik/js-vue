// let price = [12, 5, 45, 78, 9];
// const price2 = [120, 23, 45, 60, 55];
// console.log(price2[2]);
//
// price2[1] = 30;
//
// console.log(price2);
//
// console.log(price.length)

// let sum = 0;
// for (let i = 0; i < price.length; i++) {
//     sum += price[i];
//     if (price[i] % 2 === 0) {
//         console.log(price[i]);
//     }
// }
// console.log(sum);

// function countLimit(price, limit) {
//     let count = 0;
//     for(let i = 0; i < price.length; i++) {
//         if(price[i] > limit) {
//             count++;
//         }
//     }
//     return count;
// }
//
// let price = [50, 45, 30, 100, 55];
// let limit = 50;
// console.log(countLimit(price, limit));

//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// function Average(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     return sum / num.length;
// }
// let price = [50, 45, 30, 100, 55];
// console.log(Average(price));
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐


//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
function getSum() {
    let n = +prompt("Скільки чисел?");
    let num = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
        num[i] = +prompt("Введіть число:");
        sum = sum + num[i];
    }
    console.log("Сума:", sum);
}
getSum();
//⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐