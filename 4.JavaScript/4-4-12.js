//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
let n = 7;
function Soma(n){
    let arrayS = []
    for (let i = 1; i<=n; i++){
        arrayS[i] = i;
    }
    
    let somatoria = 0
    for (let j=0; j<arrayS.length; j++){
        if(arrayS[j]>0){
    somatoria = somatoria + arrayS[j]
    }}
   
    return(somatoria)
}

console.log(Soma(n))