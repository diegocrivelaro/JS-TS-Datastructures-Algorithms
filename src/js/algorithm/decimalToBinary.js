import Stack from "../data-structures/stack.js";

function decimalToBinary(decimal) {
  const restStack = new Stack();

  let numberDecimal = decimal;
  let rest;
  let quotient;
  let binaryString = ``;

  while (numberDecimal > 0) {
    rest = Math.floor(numberDecimal % 2);
    restStack.push(rest);
    quotient = Math.floor(numberDecimal / 2);
    numberDecimal = quotient;
  }

  while (!restStack.isEmpty()) {
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(12)); // 1100
