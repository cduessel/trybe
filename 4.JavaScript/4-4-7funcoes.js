
//  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

let palavra = "casa";

function pali (){
    let novapalavra = "";

for (let i = (palavra.length-1); i>-1; i--){
    novapalavra = novapalavra + palavra[i];
    };
    console.log(novapalavra);

if (palavra === novapalavra){return true}    
else {return false};
}
console.log(pali())