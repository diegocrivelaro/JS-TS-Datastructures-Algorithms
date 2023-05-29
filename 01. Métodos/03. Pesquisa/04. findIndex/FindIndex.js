// @ts-check

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Diego", nota: 9.3, bolsista: false },
  { nome: "Marta", nota: 4.6, bolsista: true },
  { nome: "Suze", nota: 8.6, bolsista: true },
  { nome: "Ricardo", nota: 2.6, bolsista: true },
];

const index1 = alunos.findIndex((item) => item.nome.includes("Suze")); // 3
const index2 = alunos.findIndex((item) => item.nota >= 7.6); // 1
const index3 = alunos.findIndex((item) => item.nota < 1.6); // -1

console.log(index1);
console.log(index2);
console.log(index3);
