const notas1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notas2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notas3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notas4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notas5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const notas6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const notasIguais1 = notas1.fill(50, 0, 5); // [50, 50, 50, 50, 5, 6, 7, 8, 9, 10]
const notasIguais2 = notas2.fill(50, 0, 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const notasIguais3 = notas3.fill(50, 2, 2); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const notasIguais4 = notas4.fill(50, 2, 3); // [0, 1, 50, 3, 4, 5, 6, 7, 8, 9, 10]
const notasIguais5 = notas5.fill(50, -11, -2); // [50, 50, 50, 50, 50, 50, 50, 50, 50, 9, 10]

// Tal situação funciona, porém o TypeScript reclama, pois esse método espera um number
const notasIguais6 = notas6.fill("Diego", 2, 8); // [0, 1, "Diego", "Diego","Diego", "Diego", "Diego", "Diego", 8, 9, 10]

console.log(notasIguais1);
console.log(notasIguais2);
console.log(notasIguais3);
console.log(notasIguais4);
console.log(notasIguais5);
console.log(notasIguais6);
