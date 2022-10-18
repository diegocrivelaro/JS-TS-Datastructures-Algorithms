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
