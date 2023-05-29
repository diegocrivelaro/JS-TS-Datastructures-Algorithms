// @ts-check
// Verificar se um array contém um valor

const string = "casa";
console.log(string.includes("ca")); // True

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.includes(2)); // True
console.log(array.includes(12)); // False

const ArrayObj = [
  { name: "John", age: 20 },
  { name: "Mary", age: 25 },
  { name: "Peter", age: 30 },
];
console.log(ArrayObj.includes("Peter")); // False (O argumento do tipo 'string' não é atribuível ao parâmetro do tipo '{ name: string; age: number; }'.)
console.log(ArrayObj.map((item) => item.name.includes("Peter"))); // [false, false, true]
console.log(ArrayObj.filter((item) => item.name.includes("Peter"))); // [ {name: "Peter", age: 30} ]

const obj = { name: "John", age: 20 };
console.log(obj.name.includes("jo")); // False
console.log(obj.name.includes("Jo")); // True

console.log(array.includes(2, 3)); // False (O segundo argumento é o índice inicial de pesquisa)
