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

const _items = Symbol('StackItems');
const _count = Symbol('StackCount');

export default class Stack {
  constructor() {
    this[_items] = {};
    this[_count] = 0;
  }

  isEmpty() {
    return this[_count] === 0;
  }

  push(element) {
    this[_items][this[_count]] = element;
    this[_count]++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this[_count]--;
    const result = this[_items][this[_count]];
    delete this[_items][this[_count]];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this[_items][this[_count] - 1];
  }

  clear() {
    if (this.isEmpty()) {
      return 0;
    }

    this[_items] = {};
    this[_count] = 0;

    return 1;
  }

  size() {
    return this[_count];
  }

  list() {
    return this[_items];
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this[_items][0]}`;

    for (let i = 1; i < this[_count]; i++) {
      objString = `${objString},${this[_items][i]}`;
    }

    return objString;
  }
}

const stack = new Stack();

stack.push(1);
stack.list();

// Explorando vulnerabilidade
const getSymbol = Object.getOwnPropertySymbols(stack);
const firstSymbol = getSymbol[0];
stack[firstSymbol] = { 0: 'hacked' };
stack.list();
