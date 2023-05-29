// @ts-check

const numbers = Object.keys(new Array(15).fill(null).map(Number));

const sorted1 = numbers.sort();

console.log(sorted1);
/*
[
  "0",
  "1",
  "10",
  "11",
  "12",
  "13",
  "14",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

Não está ordenado corretamente, pois o método sort() ordena os elementos de um array de acordo com a ordêm alfabética. Então, ele pressupõe que os elementos do array são strings.
*/

const sorted2 = numbers.sort((x, y) => +x - +y);
console.log(sorted2);
/*
[
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
];

Agora está ordenado corretamente, pois o método sort() recebe uma função de comparação que retorna um número negativo, zero ou positivo, dependendo se o primeiro argumento é menor, igual ou maior que o segundo.
*/
