//7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras

let a = 55

let nota = 0

if ( a > 100){ nota = "numero invalido"}
else if ((a > 90) ){ nota = "A"}
else if (a > 80){ nota = "B"}
else if (a > 70){ nota = "C"}
else if (a > 60){ nota = "D"}
else if (a > 50){ nota = "E"}
else if (a > 0){ nota = "F"}
else { nota = "numero invalido"}

console.log(nota)