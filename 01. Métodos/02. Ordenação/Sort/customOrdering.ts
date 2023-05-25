const persons = [
  { name: "John", age: 21 },
  { name: "Peter", age: 31 },
  { name: "Mark", age: 21 },
  { name: "Maria", age: 24 },
  { name: "Monica", age: 31 },
];

const compareArrowFunction = (a, b) => {
  if (a.age < b.age) return -1;

  if (a.age > b.age) return 1;

  return 0;
};

console.log(persons.sort(compareArrowFunction));

// [
//   { name: 'John', age: 21 },
//   { name: 'Mark', age: 21 },
//   { name: 'Maria', age: 24 },
//   { name: 'Peter', age: 31 },
//   { name: 'Monica', age: 31 }
// ]
