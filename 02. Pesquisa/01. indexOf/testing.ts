const numbers = [1, 2, 3, 4, 2, 2, 5, 5, 5, 6, 6, 7, 7, 2, 8, 9];

const indexOf = numbers.indexOf(2);
console.log(indexOf);
// 1

const indexOf2 = numbers.indexOf(2, 3);
console.log(indexOf2);
// 4
// O segundo parâmetro fornece o índice pelo qual eu quero começar a minha pesquisa, por isso ele me retornou o índice 4, pois ele começou a pesquisar a partir do índice 3.
