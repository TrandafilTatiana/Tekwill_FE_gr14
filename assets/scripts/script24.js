let fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");
console.log(fruits.length);
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);

let colors = ["red", "green", "blue", "yellow"];
console.log(colors);
let indexOfGreen = colors.indexOf("green");
console.log(indexOfGreen);
let includesOrange = colors.includes("orange");
console.log(includesOrange);

let names = ["John", "Jane", "Mike", "Jennifer"];
let unshiftDavid = names.unshift("David");
console.log(names);
let indexOfMike = names.indexOf("Mike");
console.log(indexOfMike);

let numberss = [2, 4, 6, 8, 10];
let includes5 = numberss.includes(5);
console.log(includes5);
if (numberss.includes(5)) {
  console.log("Массив содержит элемент 5");
} else {
  console.log("Массив не содержит элемент 5");
}
numberss.push(12);
console.log(numberss);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(months);
let sortedMonths = months.sort();
console.log(sortedMonths);

let filteredMonths = months.filter((month) => month.length > 3);
console.log(filteredMonths);

let monthss = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let slicedMonths = monthss.slice(6, 11);
console.log(slicedMonths);

let result = months
  .sort()
  .filter((month) => month.length >= 5)
  .join("-");
console.log(result);
