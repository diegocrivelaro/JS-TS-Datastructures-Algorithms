// Array.from espera um argumento de objeto iterável ou array-like, e retorna um array original.

const array = []; // []
console.log(Array.from(array));

const str = "Diego Ferreira Crivelaro";
console.log(str[2]); // Retorna "e"
console.log(Array.from(str)); // Retorna ["D", "i", "e", "g", "o", " ", "F", "e", "r", "r", "e", "i", "r", "a", " ", "C", "r", "i", "v", "e", "l", "a", "r", "o"]

const obj = { length: 5 };
console.log(Array.from(obj)); // Retorna [undefined, undefined, undefined, undefined, undefined]

// O array.from suporta um segundo parâmetro opcional, que é uma função de mapeamento.
const obj2 = { 0: "5", 1: "6", 2: "7", length: 3 };
console.log(Array.from(obj2, (v) => Number(v) + 2));

const obj3 = {
  0: "1",
  1: "2",
  2: "3",
  length: 3,
};

console.log(
  Array.from(obj3, (valor, indice) => `Indice: ${indice} e Valor: ${valor}`)
);
