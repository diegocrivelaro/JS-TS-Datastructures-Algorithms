// @ts-check

/*
isEmpty -> Retorna true se a pilha estiver vazia, ou false se o tamanho da pilha for maior que 0;
push -> Adicionar um  ou vários elementos ao topo da pilha;
pop -> Remove o elemento do topo da pilha, além de retornar o elemento removido;
peek -> Retorna o elemento do topo da pilha, sem removê-lo;
clear -> Limpar a pilha por completo;
size -> Retorna o tamanho da pilha;
list -> Retorna a estrutura stack;
toString -> Retorna uma string com todos elementos.
*/

export default class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  isEmpty() {
    return this.count === 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  clear() {
    if (this.isEmpty()) {
      return 0;
    }

    this.items = {};
    this.count = 0;

    return 1;
  }

  size() {
    return this.count;
  }

  list() {
    return this.items;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
  }
}

const stack = new Stack();

stack.push(1);
stack.list();
