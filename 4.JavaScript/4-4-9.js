//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let arrayin = [2, 4, 6, 7, 10, 0, -3];

function menorI (array){
    let sindex = array.length;
    for (i= array.length; i>0; i-=1){
        if (array[i]> array [i+1]){ sindex = i - 1}
        return sindex;
    }
}
console.log(menorI(arrayin))