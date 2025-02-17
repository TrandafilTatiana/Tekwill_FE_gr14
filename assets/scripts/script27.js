// number 1
const studentGrades = [
  { name: "Anna", note: 9 },
  { name: "Denis", note: 7 },
  { name: "Cristian", note: 8 },
  { name: "Daniel", note: 6 },
  { name: "Elena", note: 10 },
];
let average =
  studentGrades.reduce((acc, curEl) => {
    return acc + curEl.note;
  }, 0) / studentGrades.length;
console.log(average);

// number 2
const products = [
  { name: "Tshirt", price: 50, isAvailable: true },
  { name: "Pants", price: 80, isAvailable: false },
  { name: "Jacket", price: 120, isAvailable: true },
  { name: "Shirt", price: 60, isAvailable: true },
  { name: "Skirt", price: 40, isAvailable: false },
];
let available = products.filter((el) => el.isAvailable).map((el) => el.name);
console.log(available);

//number 3
let numbers = [10, 5, 8, 15, 3, 20];
let maximum = numbers.reduce((acc, el) => (el > acc ? el : acc));
console.log(maximum);

//number 4
let class1a = [{ John: [8, 7, 9] }, { Mary: [9, 9, 10] }, { Alex: [6, 8, 7] }];
function averageClass1a(students) {
  return students.reduce((acc, el) => {
    let name = Object.keys(el)[0];
    let notes = el[name];
    let average = notes.reduce((sum, note) => sum + note, 0) / notes.length;
    acc[name] = parseFloat(average.toFixed(2));
    return acc;
  }, {});
}
console.log(averageClass1a(class1a));
