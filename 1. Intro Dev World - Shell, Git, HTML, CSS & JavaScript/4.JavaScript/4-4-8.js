//  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let arrayIn = [2, 3, 6, 7, 10, 1];

function maiorIndice(array) {
    let bindex = 0;
    for (let i =0; i< array.length; i+=1){
        if (array[i] < array[i+1]){ bindex = i + 1;} 
    } return bindex
        }
console.log(maiorIndice(arrayIn));