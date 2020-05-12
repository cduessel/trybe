    //10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no cálculo do lucro.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let custo = 20
let venda = 100

if ( (custo > 0) && (venda > 0) ){
    let lucroliq = 0.8 * ((venda - custo)*1000);
    console.log(lucroliq);
}
else { console.log("insira numero maior que zero")}

