// const fs = require('fs');

// const nomeDoArquivo = './meu-arquivo.txt';

// try {
//   const data = fs.readFileSync('./meu-arquivo.txt', 'utf8');
//   console.log(data);
// } catch (err) {
//   console.error(`Erro ao ler o arquivo: ${err.path}`);
//   console.log(err);
// }

const fs = require('fs');

fs.readFile('./meu-arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});