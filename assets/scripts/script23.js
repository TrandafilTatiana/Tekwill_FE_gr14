let number = 30;
let result = number % 2 === 0 ? "Число четное" : "Число нечетное";
console.log(result);

let isLoggedIn = false;
let examination = isLoggedIn
  ? "Пользователь аутентифицирован"
  : "Пользователь не аутентифицирован";
console.log(examination);

let price = 9;
let quantity = 2;
let inStock = true;
let cost = inStock ? 9 * 2 : "Product is out of stock";
console.log(cost);

let currentYear = new Date().getFullYear();
let isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
let message = isLeapYear ? 'Год високосный' : 'Год не високосный';
console.log(message);

