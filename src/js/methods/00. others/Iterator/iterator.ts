const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const iterator = num[Symbol.iterator]();

console.log([...iterator]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(iterator.next()); // { value: 1, done: false }

console.log([...iterator]); // [2, 3, 4, 5, 6, 7, 8, 9, 10 ]

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5
console.log(iterator.next().value); // 5
console.log(iterator.next().value); // 7
console.log(iterator.next().value); // 8
console.log(iterator.next().value); // 9
console.log(iterator.next().value); // 10
console.log(iterator.next().value); // undefined
