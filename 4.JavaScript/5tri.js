//5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let a = 30
let b = 90
let c = 60

if ( isNaN (a || b || c)) { res = "error"} 
else { switch ( (a+b+c) === 180){ 
    case true: res = "true"
    break;
    case false: res = "false"
    break;}
}


console.log(res)