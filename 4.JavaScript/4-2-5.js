//Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// se pudesse utilizar sort tava facil!

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0

for ( let i=0; i<numbers.length; i+= 1){
    for (let x = numbers.length; x>0 ; x-= 1){
    if(numbers[i] > numbers[x]){maior = numbers[i]}
     
    }
}

console.log(maior)