
/**
 * Deque (Double-Ended Queue) - Fila de duas pontas
 *
 * Estrutura de dados que permite inserção e remoção de elementos
 * tanto no início quanto no final da fila com eficiência.
 *
 * Utiliza um objeto para armazenar elementos com índices numéricos,
 * mantendo dois ponteiros: lowestCount (início) e count (fim).
 *
 * @template T - Tipo dos elementos armazenados no deque
 *
 * Complexidade das operações:
 * - addFront: O(1) quando há espaços vazios, O(n) caso contrário
 * - addBack: O(1)
 * - removeFront: O(1)
 * - removeBack: O(1)
 * - peekFront: O(1)
 * - peekBack: O(1)
 */
export default class Deque<T> {
  private count: number;
  private lowestCount: number;
  private items: { [key: number]: T };

  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /**
   * Adiciona um elemento no início do deque
   *
   * @param element - Elemento a ser adicionado
   *
   * Estratégia:
   * 1. Se vazio: delega para addBack (otimização)
   * 2. Se há espaços vazios no início (lowestCount > 0): reutiliza o espaço - O(1)
   * 3. Caso contrário: desloca todos os elementos - O(n)
   */
  addFront(element: T): void {
    if (this.isEmpty()) {
      this.addBack(element);
    }

    /**
     * OTIMIZAÇÃO: Reutiliza espaços vazios deixados por removeFront()
     *
     * Quando removeFront() é chamado, lowestCount aumenta e deixa "buracos" no início.
     * Este if verifica se há espaços vazios (lowestCount > 0) e os reutiliza.
     *
     * Exemplo:
     * Estado: items = {2: 'B', 3: 'C'}, lowestCount = 2, count = 4
     * Após addFront('A'): items = {1: 'A', 2: 'B', 3: 'C'}, lowestCount = 1
     *
     * SEM este if:
     * - Todos elementos seriam deslocados para a direita - O(n)
     * - Resultado: {0: 'A', 1: undefined, 2: undefined, 3: 'B', 4: 'C'} ❌
     *
     * COM este if:
     * - Apenas decrementa lowestCount e insere no espaço vazio - O(1) ✅
     */
    if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
      return
    }

    // Caso não haja espaços vazios, desloca todos os elementos para a direita
    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1];
    }
    this.count++;
    this.lowestCount = 0;
    this.items[0] = element;
  }

  /**
   * Adiciona um elemento no final do deque
   *
   * @param element - Elemento a ser adicionado
   * Complexidade: O(1)
   */
  addBack(element: T): void {
    this.items[this.count] = element;
    this.count++;
  }

  /**
   * Remove e retorna o primeiro elemento do deque
   *
   * @returns O elemento removido ou undefined se o deque estiver vazio
   * Complexidade: O(1)
   */
  removeFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount]
    this.lowestCount++;
    return result;
  }

  /**
   * Remove e retorna o último elemento do deque
   *
   * @returns O elemento removido ou undefined se o deque estiver vazio
   * Complexidade: O(1)
   */
  removeBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  /**
   * Retorna o primeiro elemento do deque sem removê-lo
   *
   * @returns O primeiro elemento ou undefined se o deque estiver vazio
   * Complexidade: O(1)
   */
  peekFront(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  /**
   * Retorna o último elemento do deque sem removê-lo
   *
   * @returns O último elemento ou undefined se o deque estiver vazio
   * Complexidade: O(1)
   */
  peekBack(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  /**
   * Verifica se o deque está vazio
   *
   * @returns true se o deque estiver vazio, false caso contrário
   * Complexidade: O(1)
   */
  isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }

  /**
   * Retorna o número de elementos no deque
   *
   * @returns Quantidade de elementos armazenados
   * Complexidade: O(1)
   */
  size(): number {
    return this.count - this.lowestCount;
  }

  /**
   * Remove todos os elementos do deque
   *
   * Complexidade: O(1)
   */
  clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  /**
   * Retorna uma representação em string do deque
   *
   * @returns String com os elementos separados por vírgula
   * @example "A,B,C" para um deque com elementos A, B e C
   * Complexidade: O(n)
   */
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