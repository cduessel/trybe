// 6- Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let a = "Bishops"

switch (a.toLowerCase()){
    case "bishop": res = "diagonals"
    break;
    case "queen": res = "all directions"
    break;
    case "tower": res = "straights"
    break;
    case "horse": res = "Ls"
    break;
    case "king": res = "1 step ahead"
    break;
    default: res = "not a acceptable piece" 
}
console.log(res)