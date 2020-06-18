// exercicio numeros primos


const assert = require('assert');

const num = 12;

function primos(num) {
    let res = [1];
  for(let i = 2; i < num; i += 1) {
    if(i%2 !== 0){
        res.push(i);
    }
  return(res)
};
};
const teste = primos(15);

console.log(teste)

// testes:

assert.notEqual(primos, undefined, 'existe função?');
assert.strictEqual(typeof(primos), "function");
assert.notEqual(num, undefined, 'existe numero?');
assert.ok(num>0, "numero maior que zero");
assert.equal(primos(9), [1, 2, 3, 5, 7], "teste 9")
