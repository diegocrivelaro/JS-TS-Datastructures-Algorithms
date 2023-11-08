// Ele pegou o Objeto e retornou um array de array com chave/valor
const numeros = {
  1: "um",
  2: "dois",
  3: "três",
};

console.log(Object.keys(numeros));
console.log(Object.values(numeros));
console.log(Object.entries(numeros));

Object.entries(numeros).forEach(([chave, valor]) => {
  console.log(`${chave} - ${valor}`);
});

// O método entries() aplicado em arrays devolverá um array com os indices e valores do array principal
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const entriesNumbers = numbers.entries();

console.log(entriesNumbers.next().value);
console.log(entriesNumbers.next().value);
console.log(entriesNumbers.next().value);
console.log(entriesNumbers.next().value);
