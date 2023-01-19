const pessoas = [
  { nome: "João", idade: 20 },
  { nome: "Maria", idade: 25 },
  { nome: "José", idade: 30 },
  { nome: "José", idade: 35 },
  { nome: "José", idade: 35 },
  { nome: "José", idade: 60 },
  { nome: "Ana", idade: 35 },
];

const pessoas1 = pessoas.filter((item, index, array) => {
  console.log(`${index} - ${JSON.stringify(item)} = ${JSON.stringify(array)}`);
});

console.log(pessoas1);
/*
0 - {"nome":"João","idade":20} = [{"nome":"João","idade":20},{"nome":"Maria","idade":25},{"nome":"José","idade":30},{"nome":"José","idade":35},{"nome":"José","idade":35},{"nome":"José","idade":60},{"nome":"Ana","idade":35}]
1 - {"nome":"Maria","idade":25} = [{"nome":"João","idade":20},{"nome":"Maria","idade":25},{"nome":"José","idade":30},{"nome":"José","idade":35},{"nome":"José","idade":35},{"nome":"José","idade":60},{"nome":"Ana","idade":35}]
2 - {"nome":"José","idade":30} = [{"nome":"João","idade":20},{"nome":"Maria","idade":25},{"nome":"José","idade":30},{"nome":"José","idade":35},{"nome":"José","idade":35},{"nome":"José","idade":60},{"nome":"Ana","idade":35}]
3 - {"nome":"José","idade":35} = [{"nome":"João","idade":20},{"nome":"Maria","idade":25},{"nome":"José","idade":30},{"nome":"José","idade":35},{"nome":"José","idade":35},{"nome":"José","idade":60},{"nome":"Ana","idade":35}]
4 - {"nome":"José","idade":35} = [{"nome":"João","idade":20},{"nome":"Maria","idade":25},{"nome":"José","idade":30},{"nome":"José","idade":35},{"nome":"José","idade":35},{"nome":"José","idade":60},{"nome":"Ana","idade":35}]
5 - {"nome":"José","idade":60} = [{"nome":"João","idade":20},{"nome":"Maria","idade":25},{"nome":"José","idade":30},{"nome":"José","idade":35},{"nome":"José","idade":35},{"nome":"José","idade":60},{"nome":"Ana","idade":35}]
6 - {"nome":"Ana","idade":35} = [{"nome":"João","idade":20},{"nome":"Maria","idade":25},{"nome":"José","idade":30},{"nome":"José","idade":35},{"nome":"José","idade":35},{"nome":"José","idade":60},{"nome":"Ana","idade":35}]
*/

const pessoas2 = pessoas.filter((item) => {
  return item.nome.includes("José") && item.idade > 30;
});

console.log(pessoas2);
/*
[
  { nome: 'José', idade: 35 },
  { nome: 'José', idade: 35 },
  { nome: 'José', idade: 60 }
]
*/
