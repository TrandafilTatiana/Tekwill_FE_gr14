// number 1
let student = {
  name: "John",
  lastName: "Doe",
  faculty: "history",
  year: 3,
};

const getStudentFields = ({ name, lastName, faculty, year }) => {
  console.log([`${name} ${lastName}`, faculty, year]);
};

getStudentFields(student);

// number 2
let colors = ["red", "green", "blue", "violet"];

const showFirstThird = ([first, , third]) => {
  console.log(first);
  console.log(third);
};

showFirstThird(colors);

// number 3
const numbersArray = (...args) => args;

console.log(numbersArray(1, 2));
console.log(numbersArray(4, 5, 6, 7, 8));

// number 4
const neighbor1 = ["Ivana", "Kirill"];
const neighbor2 = ["Vika", "Bety"];

const neighbors = (neighbor1, neighbor2) => {
  return [...neighbor1, ...neighbor2];
};

console.log(neighbors(neighbor1, neighbor2));

// number 5
let addStudent = { language: "en" };

const newStudent = (student, addStudent) => {
  return { ...student, ...addStudent };
};

console.log(newStudent(student, addStudent));

// number 7
const duplicateEncode = (el) => {
  el = el.toLowerCase();
  return [...el]
    .map((element) => {
      return el.indexOf(element) === el.lastIndexOf(element) ? "(" : ")";
    })
    .join("");
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));

// number 8
const extraNumber = (numeric) => {
  const evens = numeric.filter((num) => num % 2 === 0);
  const odds = numeric.filter((num) => num % 2 !== 0);

  return evens.length === 1 ? evens[0] : odds[0];
};

console.log(extraNumber([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(extraNumber([160, 3, 1719, 19, 11, 13, -21]));
