class Stack {
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

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack)); // []

stack.push(1);
stack.push(2);
console.log(stack.peek());
