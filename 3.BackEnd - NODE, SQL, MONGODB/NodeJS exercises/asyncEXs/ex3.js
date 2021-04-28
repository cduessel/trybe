// ex 3 part 1 callBack -> readline
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('qual arquivo deseja ler? ', (answer) => {
  fs.readFile(answer, (err, content) => {
    if(err){console.error(`Erro! ${err.message}`);
    } 
    return console.log(`Sucesso! ${content.byteLength} bytes, ${content.length}`);
  })
  rl.close();
});

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });