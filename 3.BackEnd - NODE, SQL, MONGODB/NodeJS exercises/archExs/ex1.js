const fs = require('fs');

function readTwoFiles(file1, file2){
  const startScript = Date.now();
  const startFile1 = Date.now();
  const readFile1 = fs.readFileSync(file1);
  const startFile2 = Date.now();
  const readFile2 = fs.readFileSync(file2);
  
  console.log(`1o Sucesso! ${readFile1.byteLength} bytes, lido em ${Date.now()-startFile1} ms`);
  console.log(`2o Sucesso! ${readFile2.byteLength} bytes, lido em ${Date.now()-startFile2} ms`);
  const endscript = Date.now();
  console.log(`Esse script todo demorou ${endscript-startScript} ms`);
};

readTwoFiles('./zoom_0.mp4', './teste.txt');
