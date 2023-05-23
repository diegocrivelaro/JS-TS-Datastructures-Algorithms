const letterA = "a";
const letterB = "b";

console.log(letterA.localeCompare(letterB));
// -1 (A letra A vem antes da letra B, então o valor é negativo)

console.log(letterB.localeCompare(letterA));
// 1 (A letra B vem depois da letra A, então o valor é positivo)

console.log(letterA.localeCompare(letterA));
// 0 (A letra A é igual a letra A, então o valor é 0)

const letterAWitchAccents = "à";
const letterCWitchAccents = "ç";

console.log(
  letterAWitchAccents.localeCompare(letterCWitchAccents, "pt", {
    ignorePunctuation: true,
  })
);
// -1 (A letra A vem antes da letra C, então o valor é negativo)

const number1 = "1";
const number2 = "2";

console.log(number1.localeCompare(number2, undefined, { numeric: true }));
// -1 (O número 1 vem antes do número 2, então o valor é negativo)
