const obj = {
  0: "Diego",
  1: "Gabriel",
  2: "Rafael",
  length: 3,
};

console.log(obj[1]); // Se você tentar acessar o índice 1, ele vai retornar Gabriel.

console.log(Array.from(obj)); // [ 'Diego', 'Gabriel', 'Rafael' ]

// Caso você defina um `length` maior que a quantidade de elementos, o `Array.from(obj2)` irá preencher os outros espaços com `undefined`
const obj2 = {
  0: "Diego",
  1: "Gabriel",
  2: "Rafael",
  length: 10,
};

console.log(Array.from(obj2)); // ['Diego', 'Gabriel', 'Rafael', undefined, undefined, undefined, undefined, undefined, undefined, undefined]
