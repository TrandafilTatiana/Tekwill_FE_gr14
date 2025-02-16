// number 1
function myFunction(prop) {
  let keys = Object.keys(prop);
  let i = 0;
  while (i < keys.length) {
    let key = keys[i];
    console.log(`${key}:${prop[key]}`);
    i++;
  }
}
let men = {
  name: "john",
  age: 30,
  city: "New-York",
};
myFunction(men);

// number 2
let pet = {
  name: "Bruno",
  age: 3,
  city: "New-York",
};
let keyExist = "name";
function checkKey(pet, keyPet) {
  for (let keyExist in pet) {
    if (keyExist === keyPet) {
      return true;
    }
  }
  return false;
}
console.log(checkKey(pet, keyExist));

// number 3
function myObj(obj) {
  let result = "";
  let keys = Object.keys(obj);
  let i = 0;
  do {
    result += obj[keys[i]];
    i++;
  } while (i < keys.length);
  return result;
}
let obj1 = {
  prop1: "Hello",
  prop2: "World",
  prop3: "!",
};
console.log(myObj(obj1));

//number 4
function numberVowels(row) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  let i = 0;
  while (i < row.length) {
    if (vowels.includes(row[i])) {
      count++;
    }
    i++;
  }
  return count;
}
let number4 = "Hello world, my name is Albert";
console.log(numberVowels(number4));

// number 5
function myClassify(notes) {
  let result = {};
  for (let student in notes) {
    let points = notes[student];
    let average = points.reduce((a, b) => a + b, 0) / points.length;
    result[student] = `medium: ${average.toFixed(2)}`;
  }
  return result;
}
let studentsGrades = {
  John: [8, 7, 9],
  Mary: [9, 9, 10],
  Alex: [6, 8, 7],
};
console.log(myClassify(studentsGrades));

// number 6
function myReverse(rowWords) {
  let reversedRow = "";
  let i = rowWords.length - 1;
  do {
    reversedRow += rowWords[i];
    i--;
  } while (i >= 0);
  return reversedRow;
}
let words = "Hello, world!";
console.log(myReverse(words));

// number 7
function isPalindrome(read) {
  let left = 0;
  let i = read.length - 1;
  while (left < i) {
    if (read[left] !== read[i]) {
      return false;
    }
    left++;
    i--;
  }
  return true;
}
let go = "level";
console.log(isPalindrome(go));
