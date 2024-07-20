import Stack from "../data-structures/stack.js";

export default function binaryToDecimal(binary) {
  const resultStack = new Stack();

  const numberBinary = binary.toString();

  const base = 2;
  let resultExponentiation;
  let resultMultiplication;
  let resultSum = 0;

  for (let i = 1; i <= numberBinary.length; i++) {
    resultExponentiation = base ** (i - 1);
    resultMultiplication = resultExponentiation * numberBinary.at(-i);
    resultStack.push(resultMultiplication);
  }

  while (!resultStack.isEmpty()) {
    const result = Number(resultStack.pop());
    resultSum += result;
  }

  return resultSum;
}

console.log(binaryToDecimal(1110));
