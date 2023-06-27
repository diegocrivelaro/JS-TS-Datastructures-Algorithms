// @ts-check

/*
push -> Adicionar um  ou vários elementos ao topo da pilha;
pop -> Remove o elemento do topo da pilha, além de retornar o elemento removido;
peek -> Retorna o elemento do topo da pilha, sem removê-lo;
isEmpty -> Retorna true se a pilha estiver vazia, ou false se o tamanho da pilha for maior que 0;
clear -> Limpar a pilha por completo;
size -> Retorna o tamanho da pilha;
*/

class Stack {
  #items;

  constructor() {
    this.#items = [];
  }

  push(element) {
    this.#items.push(element);
  }

  pop() {
    return this.#items.pop();
  }

  peek() {
    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  clear() {
    this.#items = [];
  }

  size() {
    return this.#items.length;
  }

  list() {
    return this.#items;
  }
}

const stack = new Stack();

console.log(`stack.isEmpty(): ${stack.isEmpty()}`);

stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(`stack.isEmpty(): ${stack.isEmpty()}`);

console.log(`stack.pop(): ${stack.pop()}`);

console.log(`stack.peek(): ${stack.peek()}`);

console.log(`stack.size(): ${stack.size()}`);

console.log(`stack.list(): ${stack.list()}`);

stack.clear();
console.log(`stack.clear(): ${stack.list()}`);
