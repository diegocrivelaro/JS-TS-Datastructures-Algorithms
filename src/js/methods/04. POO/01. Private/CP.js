export class StackWithPrivateModifier {
  #items = {};
  #count = 0;

  isEmpty() {
    return this.#count === 0;
  }

  push(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.#items[this.#count - 1];
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.#count--;
    return this.#items.pop();
  }
}

const stack = new StackWithPrivateModifier();
console.log(Object.getOwnPropertyNames(StackWithPrivateModifier)); // []

StackWithPrivateModifier.push(1);
StackWithPrivateModifier.push(2);
console.log(StackWithPrivateModifier.peek());
