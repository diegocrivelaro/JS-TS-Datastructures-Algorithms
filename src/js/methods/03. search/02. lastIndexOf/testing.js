// @ts-check

const numbers = [1, 2, 3, 4, 2, 2, 5, 5, 5, 6, 6, 7, 7, 2, 8, 9];

const lastIndexOf = numbers.lastIndexOf(2);
console.log(lastIndexOf);
// 13

const lastIndexOf2 = numbers.lastIndexOf(2, 1);
console.log(lastIndexOf2);
// 1
// O segundo parâmetro fornece o índice pelo qual eu quero começar a minha pesquisa, por isso ele me retornou o índice 1, pois ele começou a pesquisar a partir do índice 1.
