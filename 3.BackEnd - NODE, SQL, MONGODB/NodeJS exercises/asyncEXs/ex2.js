// ex2

async function promiseFunc(num1, num2, num3) {
  const resultadoSoma = new Promise((resolve, reject) => {
    if( typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
    return reject(new Error("Digite apenas números"));
    }
    resolve(num1 + num2);
  });

  const resultado = await resultadoSoma * num3; 

  if(resultado < 50){ return Promise.reject(new Error("resultado muito baixo"))};

  return console.log("seu número mágico é:", resultado);
};

promiseFunc(1,7,7);

// const mathOperations = async (x, y, z) => {
//   if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
//     return Promise.reject(new Error('Digite apenas números'));
//   }
//   const sum = x + y;
//   const mul = sum * z;
//   return mul < 50 ? Promise.reject(new Error('Valor muito baixo')) : mul;
// };