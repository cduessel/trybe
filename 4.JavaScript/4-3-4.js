// Depois, faça uma pirâmide com n asteriscos de base:

//   *
//  ***
// *****

let n = 5;
let base = (n+1)/2;

for(let linhas = 0; linhas < n; linhas+=1 ){
    let linha ="";
    for(let spaces = (base-linhas); spaces>0; spaces+=1){
        linha = linha +"e";
        }
    for (let star = ((2*spaces)-linhas), star < n; star +=1){
        linha = linha + "*";
    }
console.log(linha)
}