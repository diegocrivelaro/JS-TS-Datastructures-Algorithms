import Deque from "../data-structures/Deque";

function isPalindrome(str: string): boolean {
  if (!str) return false;

  const cleanedStr = str.toLocaleLowerCase("pt-BR").split(" ").join("").replace(/[^a-z0-9]/gi, "");

  const deque = new Deque<string>();
  let isEqual = true;
  let firstChar, lastChar;

  for (let i = 0; i < cleanedStr.length; i++) {
    deque.addBack(cleanedStr[i]);
  }

  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();

    if (firstChar !== lastChar) {
      isEqual = false;
    }
  }

  return isEqual;
}