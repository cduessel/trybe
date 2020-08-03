// Part 1:
// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// Teste se o retorno de sum(4, 5) é 9
// const expected = sum(4, 5);

// assert(expected === 9, 'quatro mais 5 é nove');

// Teste se o retorno de sum(0, 0) é 0
// const expected = sum(0, 0);

// assert(expected === 0, 'zero mais 0 é nada');

// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
// Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
// const expected = sum(4, "5");

// // console,log(expected)
// Part 2:

// const assert = require('assert');

// function myIndexOf(arr, item) {
//   let searchedIndex = -1;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (item === arr[i]) {
//       searchedIndex = i;
//     }
//   }
//   return searchedIndex;
// }
// // Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado

// const expected = myIndexOf([1, 2, 3, 4], 3)

// assert(expected === 2, 'indice do 3 é dois');

// // Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

// const Nexpected = myIndexOf([1, 2, 3, 4], 5)

// assert(Nexpected === -1, 'naõ tem cinco zé')

// // Part 3:
// const assert = require('assert');

// function mySum(arr) {
//   let result = 0;
//   for (let item in arr) {
//     result += arr[item];
//   }
//   return result;
// }
// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10

// let expected = mySum([1, 2, 3, 4])

// assert(expected === 10, 'soma precisa dar 10')

// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

// let expected = mySum([1, -2, -3, 4])

// assert(expected === 0, 'soma precisa dar 0')

// Part 4:
//A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

// const assert = require('assert');

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (item !== arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

// let checked = myRemove([1, 2, 3, 4], 3);
// let expected = [1, 2, 4]

// assert.deepEqual(checked, expected, 'não deu certo')

// //Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

// let wrong = [1, 2, 3, 4]

// assert.notDeepEqual(checked, wrong, "se apareceu isso deu ruim")

// // // Verifique se o array passado por parâmetro não sofreu alterações
// // let start = [1, 2, 3, 4];

// // assert.deepEqual(start, checked, 'mudouu')

// // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

// let newtest = myRemove([1, 2, 3, 4], 5);
// let newexpected = [1, 2, 3, 4];

// assert.deepEqual(newtest, newexpected, 'não deu certo isso')

// 5. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array

// const assert = require('assert');

// function myRemoveWithoutCopy(arr, item) {
//   for (let i = 0, len = arr.length; i < len; i += 1) {
//     if (arr[i] === item) {
//       arr.splice(i, 1);
//       i -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }
// let test = myRemoveWithoutCopy([1, 2, 3, 4], 3);

// let expected = [1, 2, 4];

// assert.deepEqual(test, expected, 'não deu certo isso ae')

// 2) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]

// let wrong = [1, 2, 3, 4]

// assert.notDeepEqual(test, wrong, "xiiii")

// 3) Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// ???
// let start = [1, 2, 3, 4];
// let testo = myRemoveWithoutCopy(start, 3);

// assert.notDeepEqual(start, testo, 'não deu certo issae')

// 4) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
// const novoteste= myRemoveWithoutCopy([1, 2, 3, 4], 5);
// const resultadoEsp = [1, 2, 3, 4];

// assert.deepEqual(novoteste, resultadoEsp, 'não deu certo issae')
 

