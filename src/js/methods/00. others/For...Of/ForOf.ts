const cores = ["Vermelho", "Verde", "Azul"];

// Forma antiga
for (let indice = 0; indice < cores.length; indice++) {
  console.log(cores[indice]);
}

// Forma nova
for (const cor of cores) {
  console.log(cor);
}
