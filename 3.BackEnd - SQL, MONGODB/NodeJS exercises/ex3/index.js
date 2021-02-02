var inquirer = require('inquirer');


var question = [
  {
    type: 'input',
    name: 'N',
    message: "Qual o fatorial:",
    validate: function(input){
      const numero  = !isNaN(input);
      // const inteiro = !isInteger(input);
      
      if(numero){
        return true;
      }
      return 'Please enter a valid number';
    }
  },
];

function fatorial(escolhido){
  if(escolhido <=1){
    return 1;
  };
  return escolhido * fatorial(escolhido-1);
};

inquirer.prompt(question).then((resposta) => {
  console.log(fatorial(resposta.N));
});
