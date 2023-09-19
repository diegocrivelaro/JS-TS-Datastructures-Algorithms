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

const items = new WeakMap();

export default class Stack {
  constructor() {
    items.set(this, []);
  }

  isEmpty() {
    return items.get(this).length === 0;
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const s = items.get(this);
    return s.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    const s = items.get(this);
    return s.at(1);
  }

  clear() {
    if (this.isEmpty()) {
      return 0;
    }

    const s = items.get(this);

    while (!this.isEmpty()) {
      s.pop();
    }

    return 1;
  }

  size() {
    return items.get(this).length;
  }

  list() {
    const s = items.get(this);

    return s;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    const s = items.get(this);

    let objString = `${s[0]}`;

    for (let i = 0; i < s.length; i++) {
      objString = `${objString}, ${s[i]}`;
    }

    return objString;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
console.log(stack.list());

// Explorando vulnerabilidade
const getSymbol = Object.getOwnPropertySymbols(stack);
console.log(getSymbol);
const firstSymbol = getSymbol[0];
console.log(firstSymbol);
stack[firstSymbol] = ['hacked'];
stack.list();
console.log(stack.list());
