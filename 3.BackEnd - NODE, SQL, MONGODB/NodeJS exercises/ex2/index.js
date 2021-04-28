'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'number',
    name: 'altura',
    message: "Qual a sua altura:",
  },
  {
    type: 'number',
    name: 'peso',
    message: "Qual o seu peso:",
  }
];


inquirer.prompt(questions).then((answers) => {
  const peso = answers.peso;
  const altura = answers.altura;
  const imc = (peso / (Math.pow(altura, 2))).toFixed(2);

  console.log("seu imc é: ", imc);
});
