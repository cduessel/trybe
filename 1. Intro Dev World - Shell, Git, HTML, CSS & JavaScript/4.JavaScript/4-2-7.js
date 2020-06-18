//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = 0

for ( let i = 0; i<numbers.length; i+=1){
    for ( let x = 0; x<numbers.length ; x+=1){
        if(numbers[x] < numbers[i]){ menor = numbers[x]}
    }
}

console.log(menor)