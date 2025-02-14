// number 1
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// number 2
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// number 3
let names = ["John", "Jane", "Mikhael", "Jennifer", "Bobby"];
let namesLength = [];
for (let i = 0; i < names.length; i++) {
  namesLength.push(names[i].length);
}
console.log(namesLength);

// number 4
let company = [
  ["Ann", "Bety", "Patricia"],
  ["Nick", "Tim", "Kirill", "Tatiana"],
  ["Dana", "Dorin"],
  ["Leo"],
];
for (let i = 0; i < company.length; i++) {
  for (let j = 0; j < company[i].length; j++) {
    console.log(company[i][j]);
  }
}
let allNames = [];
for (let i = 0; i < company.length; i++) {
  for (let j = 0; j < company[i].length; j++) {
    allNames.push(company[i][j]);
  }
}
console.log(allNames.sort());

// number 5
const person = {
  fname: "John",
  lname: "Doe",
  age: 30,
  profession: "developer",
};
const numberProperties = (person) => Object.keys(person).length;
console.log(numberProperties(person));

// number 6
const generateArray = (n) => {
  let numbers = [];
  for (let i = 0; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
};
let result = generateArray(5);
console.log(result);

// number 7
let number = [1, 9, 7, 8, 3, 5];
const findBiggestNumber = (number) => {
  let theBiggestNumber = number[0];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > theBiggestNumber) {
      theBiggestNumber = number[i];
    }
  }
  return theBiggestNumber;
};
console.log(findBiggestNumber(number));

//number 8
const calculateAverage = (grades) => {
  let total = 0;
  let subjectsCount = 0;
  for (let key in grades) {
    // console.log({ key, value: grades[key] });
    total += grades[key];
    subjectsCount++;
  }
  return total / subjectsCount;
};
const grades = { math: 8, literature: 7, history: 9 };
console.log(calculateAverage(grades));

//number 9
let dog = new Object();
dog.name = "Pluto";
dog.age = 5;
dog.color = "brown";
const addPuppies = (dog, numPuppies) => {
  let puppies = [];
  for (let i = 1; i <= numPuppies; i++) {
    puppies.push("Puppy_" + i);
  }
  dog.puppies = puppies;
};
addPuppies(dog, 5);
console.log(dog);
