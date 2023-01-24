// Criar um array já preenchido com seus valores
const array1 = Array(6).fill(2);
console.log(array1);
// [ 2, 2, 2, 2, 2, 2 ]

// Preencher todos valores do array com um único valor
const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array2.fill(50));
// [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];

// Preencher com um valor a partir do índice 6
const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array3.fill(50, 6));
// [0, 1, 2, 3, 4, 5, 50, 50, 50, 50, 50];

// Preencher com um valor a partir do índice 6 até o índice 8 (Excluindo o 8)
const array4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array4.fill(50, 6, 8));
// [0, 1, 2, 3, 4, 5, 50, 50, 8, 9, 10];

// Preencher com um valor a partir do índice negátivo (Irá andar de trás para frente, começando pelo -1, que é o último índice do array, e preenchendo até o índice -2, que é o penúltimo índice do array)
const array5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array5.fill(50, -2));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 50, 50];

// Preencher com um valor a partir do índice negativo até o índice negativo. (Irá andar de trás para frente. Começando do índice -11, que é o primeiro índice do array, e preenchendo até o índice -4, que é o sexto índice do array)
const array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array6.fill(50, -11, -4));
// [50, 50, 50, 50, 50, 50, 7, 8, 9, 10];
