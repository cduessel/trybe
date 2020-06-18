//11- Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salbrut = 20000
let inss = 0

if (salbrut < 1556.94){ inss = (0.08*salbrut)}
else if (salbrut < 2594){ inss = (0.09 * salbrut)}
else if (salbrut < 5189){ inss = (0.11 * salbrut)}
else {inss = 570}

let ir = 0
let base = (salbrut - inss)

if (base < 1903){ ir = 0}
else if (base < 2826){ ir = (base*0.075)-142 }
else if ( base < 3751){ ir = (base*0.15)-354 }
else if ( base < 4664){ ir = (base*0.225)-636}
else { ir = (base*0.275)-869}

let liq = (base - ir)

console.log("O salário líquido é: " + liq)
