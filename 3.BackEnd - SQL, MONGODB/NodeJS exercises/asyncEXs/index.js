'use strict';
var inquirer = require('inquirer');

var questions = [
  {
    type: 'number',
    name: 'num1',
    message: "digite um numero:",
  },
  {
    type: 'number',
    name: 'num2',
    message: "digite outro numero:",
  },
  {
    type: 'number',
    name: 'num3',
    message: "digite mais outro numero:",
  }
];


inquirer.prompt(questions).then((answers) => {
  const n1 = answers.num1;
  const n2 = answers.num2;
  const n3 = answers.num3;

  const magia = ((n1+n2)*n3);

  console.log("seu numero magico é ", magia);
});
