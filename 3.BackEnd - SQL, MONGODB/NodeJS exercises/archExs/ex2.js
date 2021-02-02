const fs = require('fs');

function readTwoFiles(file1, file2){
  const startScript = Date.now();
  const startFile1 = Date.now();
  fs.readFile(file1, (err, content) => {
  if(err){console.error(`Erro! ${err.message}`);
  }
  return console.log(`1o Sucesso! ${content.byteLength} bytes, lido em ${Date.now()-startFile1} ms`);
});
fs.readFile(file2, (err, content) => {
  if(err){console.error(`Erro! ${err.message}`);
  } 
  return console.log(`2o Sucesso! ${content.byteLength} bytes, lido em ${Date.now()-startFile1} ms`);
});
const endScript = Date.now();
console.log(`será que tudo demorou ${endScript-startScript} ms? Não.. é async não dá pra saber assim...`)
};

readTwoFiles('./zoom_0.mp4', './teste.txt');
