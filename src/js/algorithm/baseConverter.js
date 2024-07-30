import Stack from "../data-structures/stack.js";

export function baseConverter(decNumber, base) {
  const remStack = new Stack();
  const digits = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

  let number = decNumber;
  let rem;
  let baseString = ``;

  if (!(base >= 2 && base <= 36)) {
    return ``;
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(30, 16)); // 1B
console.log(baseConverter(26, 16)); // 1A
console.log(baseConverter(25, 14)); // 1B
console.log(baseConverter(100345, 35)); // 2BW0
console.log(baseConverter(65535, 16)); // FFFF
