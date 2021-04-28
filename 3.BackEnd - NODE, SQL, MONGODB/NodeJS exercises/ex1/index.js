const readline = require("readline-sync");

function executaImc(){
  const altura = readline.questionInt("Digite sua altura: ").toFixed(2);
  const peso = readline.questionInt("Digite seu peso: ").toFixed(2);

  const imc = (parseFloat(peso) / parseFloat((Math.pow(altura, 2)))).toFixed(2);
  
  console.log("seu imc é : ", imc);

  if( imc < 18.5){
    console.log("Seu peso indica magreza total");
    return;
  };

  if(imc>=18.5 && imc <= 25){
    console.log("Seu peso está normal");
    return;
  };

  if(imc> 25 && imc < 35){
    console.log("vai fazer dieta que dá");
    return;
  }

  console.log("Sua situação é obesidade grave");

};

executaImc();