//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let arrayIn = [2, 3, 2, 5, 8, 2, 3];

function repeteco(array){
    
    for (let i = 0; i< array.length; i+=1){
        let repetido = 0;
        if (array[i]===array[i+1]){repetido=repetido+1};
    };
        
    return repetido;
}

console.log(repeteco(arrayIn))