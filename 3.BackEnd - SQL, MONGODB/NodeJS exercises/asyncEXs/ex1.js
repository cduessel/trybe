// ex1

function promiseFunc(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if( typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
    return reject(new Error("Digite apenas números"));
    }
    resolve(num1 + num2);
  })
  .then((resultadoSoma) => {
    const resultado = resultadoSoma * num3;
    if(resultado < 50){ return Promise.reject(new Error("resultado muito baixo"))}
    return console.log("seu número mágico é:", resultado);
  });
};

promiseFunc(7,7,7);