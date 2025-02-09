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

let countyCode = 'ES';
let countryName;
switch (countyCode) {
  case 'MD':
    countryName = 'Moldova';
    break;
  case 'RO':
    countryName = 'Romania';
    break;
  case 'ES':
    countryName = 'Spain';
    break;
  case 'US':
    countryName = 'United States';
    break;
  case 'GR':
    countryName = 'Greece';
    break;
  case 'BG':
    countryName = 'Bulgaria';
    break;
  default:
    countryName = 'Unknown Country';
}
console.log(countryName);

let point = 79;
let mark;
switch (true) {
  case point >= 97:
    mark = "A+";
    break;
  case point >= 93:
    mark = "A";
    break;
  case point >= 90:
    mark = "A-";
    break;
  case point >= 87:
    mark = "B+";
    break;
  case point >= 83:
    mark = "B";
    break;
  case point >= 80:
    mark = "B-";
    break;
  case point >= 77:
    mark = "C+";
    break;
  case point >= 73:
    mark = "C";
    break;
  case point >= 70:
    mark = "C-";
    break;
  case point >= 67:
    mark = "D+";
    break;
  case point >= 63:
    mark = "D";
    break;
  case point >= 60:
    mark = "D-";
    break;
  case point >= 0:
    mark = "F";
    break;
  default:
    mark = "Invalid score";
}
console.log(mark);