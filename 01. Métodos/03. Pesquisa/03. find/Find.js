// @ts-check

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Diego", nota: 9.3, bolsista: false },
  { nome: "Marta", nota: 4.6, bolsista: true },
  { nome: "Suze", nota: 8.6, bolsista: true },
  { nome: "Ricardo", nota: 2.6, bolsista: true },
];

const hasBolsista = alunos.find((item) => item.bolsista);
const hasNameDiego = alunos.find((item) => item.nome === "Diego");
const hasNameMariaLuisa = alunos.find((item) => item.nome === "Maria Luisa");

console.log(hasBolsista);
console.log(hasNameDiego);
console.log(hasNameMariaLuisa);
