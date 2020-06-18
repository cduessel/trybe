//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayIn = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array){
for(let i=0; i<(array.length+1); i+=1){
    let nome1 = array[i];
    let nome2 = array[i+1];
    if(nome1.length>nome2.length){return nome1};
}

}
console.log(maiorNome(arrayIn))