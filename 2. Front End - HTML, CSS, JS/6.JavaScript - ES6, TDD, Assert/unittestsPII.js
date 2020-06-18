// 6. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado

const test = myFizzBuzz(15);
const esperado = 'fizzbuzz';

assert.equal(test, esperado, "não são iguais")

// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado

const div3 = myFizzBuzz(6);
const resesp = 'fizz'

assert.equal(div3, resesp, "não são iguais")

// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado

const div5 = myFizzBuzz(10);
const resesp5 = 'buzz'

assert.equal(div5, resesp5, "não são iguais")

// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado

const num = 8;
const ndiv = myFizzBuzz(num);

assert.equal(num, num, "não são iguais")

// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const notnum = 'teste';
const notnumtest = myFizzBuzz(notnum);
const expected = false;

assert.equal(notnumtest, expected, "não são iguais")

// 7. Teste se uma variável foi definida

// const assert = require('assert');

//const thereIs = '';

//assert.notEqual(thereIs, undefined, 'será que é assim?')

//8. Teste se uma função foi definida

//const assert = require('assert');

function thereIs() {}

assert.notEqual(thereIs, undefined, 'será que é assim?');
assert.strictEqual(typeof thereIs, "function", "teste se existe função");

//9. Utilize assert.ok() para testar uma condição

// const assert = require('assert');

function change(param) {
  return !param;
}

assert.ok(change(true)=== false, "será que é assim?")

// 10 - Compare dois objetos (JSON) para verificar se são idênticos ou não
const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, "não são iguais");
assert.notDeepStrictEqual(obj1, obj3, "não são diferentes")


// 11 - Faça o teste de uma função que compara dois números e retorna true se o primeiro
// for maior que o segundo e false caso contrário.
function isAbove(num1, num2) {
  return num1 > num2;
}

assert.ok(isAbove(7, 3), "not ok");
assert.strictEqual(isAbove(3, 7), false, "falhou")
