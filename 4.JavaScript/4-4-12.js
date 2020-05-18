//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

let n = 5;

function Soma(n){
    let arrayS = [];
    for (let i = 1; i<=n; i++){
        arrayS[i] = i;
    }
    let somatoria = 0
for (j=0; j<arrayS.length; j++){
    for(k=0; k<n;k++){
 somatoria = arrayS[j]+arrayS[k]}
};

return(soma);

}
console.log(Soma(n))