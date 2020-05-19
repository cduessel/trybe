// Depois, faça uma pirâmide com n asteriscos de base:

//   *
//  ***
// *****

let n = 5;
let base = (n+1)/2;

for(let linhas = 1; linhas <= base; linhas+=1 ){
    let linha ="";
    for(let spaces = (base-linhas); spaces>0; spaces-=1){
        linha = linha +"e";
        };
    for (let star = n-((base-linhas)*2); star>0; star -=1){
        linha = linha + "*";
    }
console.log(linha)
}