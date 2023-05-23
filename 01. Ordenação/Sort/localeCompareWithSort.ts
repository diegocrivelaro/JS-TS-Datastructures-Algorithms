const wordArray = ["Maéve", "Maeve", "Ana", "ana"];

console.log(wordArray.sort((a, b) => a.localeCompare(b, "pt")));
// Ele começa pelas palavras que começam com letras minúsculas, depois pelas que começam com letras maiúsculas e por fim pelas que começam com acentos
// [ 'ana', 'Ana', 'Maeve', 'Maéve' ]

console.log(
  wordArray.sort((a, b) =>
    a.localeCompare(b, "pt", {
      caseFirst: "upper",
    })
  )
);
// Ele começa pelas palavras que começam com letras maiúsculas, depois pelas que começam com letras minúsculas e por fim pelas que começam com acentos
// [ 'Ana', 'ana', 'Maeve', 'Maéve' ]
