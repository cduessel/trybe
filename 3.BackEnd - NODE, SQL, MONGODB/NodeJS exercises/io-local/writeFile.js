const fs = require('fs');

fs.writeFile('./meu-arquivo.txt', 'Meu textão', (erro) => {
  if (erro) {
    console.log(erro);
  }
  console.log('Arquivo salvo');
});