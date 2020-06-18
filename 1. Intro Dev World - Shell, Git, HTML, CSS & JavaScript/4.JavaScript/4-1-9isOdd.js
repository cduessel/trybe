//9- Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for ímpar. Caso contrário, ele retorna false.

let a = 5
let b = 8
let c = 9

let isODD= true

if ( (a % 2) == 0 || (b % 2) == 0 || (c % 2) == 0 )
{ isODD = false }

console.log(isODD)