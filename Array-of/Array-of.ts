// Criará um array a partir dos parâmetros passados
const array = Array.of(1, 2, 3);
console.log(array);
// [ 1, 2, 3 ]

// Criará um array novo a partir de outro array já existente
const array2 = [5, 6, 7];
const array3 = Array.of(...array2);
console.log(array3);
// Retorna [5, 6, 7]
