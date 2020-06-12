// ex1:
// const assert = require('assert');
// // escreva a função addOne para passar nos testes abaixo:

// function addOne(arrai) {
//     let newarrai = [];
// for(let i =0; i < 4; i += 1){
//     newarrai[i]= arrai[i]+1;
// };

// return(newarrai)
// }

// //
// const myArray = [31, 57, 12, 5]; 
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepEqual(output, expected);
// assert.deepEqual(myArray, unchanged);

//ex2

// const assert = require('assert');
// // escreva a função wordLengths para passar nos testes abaixo:
// function wordLengths(arraia){
//     let newarraia = [];
//     for(let i = 0; i <= arraia.length-1; i += 1){
//         newarraia[i]= arraia[i].length;
//     };
//     return(newarraia)
// }
// //
// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepEqual(output, expected);

// // ex3
// const assert = require('assert');
// // escreva a função addAllnumbers para passar nos testes abaixo:
// function addAllnumbers(arraiar) {
//     let somat = 0;
//     for(let i = 0; i < arraiar.length; i += 1){
//         somat = somat + arraiar[i];
//     };
//     return(somat);
// }
// //
// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = addAllnumbers(numbers);

// assert.strictEqual(typeof addAllnumbers, 'function');
// assert.strictEqual(output, expected);

// const assert = require('assert');
// // escreva a função findTheNeedle para passar nos testes abaixo:
// function findTheNeedle(arraiah, palavra) {
//     let res = -1;
//     for(let i = 0; i < arraiah.length; i += 1){
//         if(arraiah[i] === palavra){
//             res = i};
//             };
// return(res);
// }
// //
// let words = ['house', 'train', 'slide', 'needle', 'book'];
// let expected = 3;
// let output = findTheNeedle(words, 'needle');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = 0;
// output = findTheNeedle(words, 'plant');
// assert.strictEqual(output, expected);

// words = ['plant', 'shelf', 'arrow', 'bird'];
// expected = -1;
// output = findTheNeedle(words, 'plat');
// // assert.strictEqual(output, expected);
// const assert = require('assert');

// function greetPeople(people) {
//     let greeting = [];  
//     for(let person = 0; person < people.length; person += 1) {
//       greeting.push(`Hello ${people[person]}`);
//     }
//     return(greeting);
//   };
  
//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
//   const testz = greetPeople(parameter);
  
//   assert.equal(typeof(greetPeople), "function", "faltou function")
//   assert.deepEqual(testz, result, "deu ruim");

  /*
    Use a variável parameter como parâmetro da função acima, escreva testes
    para verificar se a mesma está retornando a como se vê na variável result
    e, caso não esteja, altere o código para que ele passe nos testes.
    Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
    a função aos poucos:
*/
const assert = require('assert');

function removeVowels(word) {
    const characters = word.split('');
    const results = [];
  
    for (let i = 0; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        results.push(i);
      } else {
        results.push(characters[i]);
      }
    }
    let resultato = results.join ;
    return resultato;
  };    
    
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  testz = removeVowels(parameter)
  console.log(testz) 

  assert.equal(typeof(removeVowels), "function", "faltou function");
  assert.deepEqual()