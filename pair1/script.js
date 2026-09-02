// alert("Привіт!");
// const name = "Emiliia";
// let age = 15;
// const isStudent = true;
// console.log(typeof name);

// + - * / % **

// let num1 = prompt("Enter a number");
// let num2 = prompt("Enter a number");
// console.log(Number(num1) + Number(num2));

// let num3 = 13;
// console.log(typeof String(num3));

let productName = prompt("Enter your product name:");
let productPrice = +prompt("Enter your product price:");
let productCount = +prompt("Enter your product count:");
let delivery = +prompt("Enter your delivery price:");
let sale = +prompt("Enter your sale:");
let myMoney = +prompt("Enter your money:");

let totalPrice = (productPrice * productCount + delivery) / 100 * (100 - sale);
let balance = myMoney - totalPrice;

console.log("ProductName: ${productName} for:${totalPrice}");

alert("Total price: ${totalPrice} \nYour money: ${myMoney} \nYour balance: ${balance}");