// @ts-check

const names = ['Ana', 'ana', 'john', 'John'];

// Ordenação padrão (Seguindo a tabela ASCII)
console.log(names.sort());
// [ 'Ana', 'John', 'ana', 'john' ]

// Ordenação personalizada
const LowerCaseCompareFunction = (a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) return -1;

  if (a.toLowerCase() > b.toLowerCase()) return 1;

  return 0;
};

console.log(names.sort(LowerCaseCompareFunction));
// ["Ana", "ana", "John", "john"];
