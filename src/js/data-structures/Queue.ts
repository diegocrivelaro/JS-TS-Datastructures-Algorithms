/*
1. Enqueue: Adiciona um novo elemento ao final da fila.
2. Dequeue: Remove o primeiro elemento da fila e retorna esse elemento.
3. Peek: Retorna o primeiro elemento da fila sem removê-lo.
4. IsEmpty: Retorna "true" se a fila estiver vazia e "false" caso contrário.
5. Size: Retorna o tamanho da fila.
6. Clear: Remove todos os elementos da fila.
7. ToString: Retorna uma representação em string da fila.
*/

export default class Queue<T> {
  private count: number;
  private lowestCount: number;
  private items: { [key: number]: T };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // Adiciona um novo elemento ao final da fila
  enqueue(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  // Remove o primeiro elemento da fila e retorna esse elemento
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount]
    this.lowestCount++;
    return result;
  }

  // Retorna o primeiro elemento da fila sem removê-lo
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  // Retorna "true" se a fila estiver vazia e "false" caso contrário
  isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }

  // Retorna o tamanho da fila
  size(): number {
    return this.count - this.lowestCount;
  }

  // Remove todos os elementos da fila
  clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
