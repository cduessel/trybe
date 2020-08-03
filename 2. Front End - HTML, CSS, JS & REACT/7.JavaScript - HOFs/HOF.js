// estrutura: `meuArray.forEach(elemento => if(elemento % 2 === 0) { console.log(`${elemento}` é divísivel por 2!)} )

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// const printValues = arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Index, posição do elemento:', indexOfTheArray);
//   console.log('Array percorrido:', theEntireArray);
// });

// console.log([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10].sort());

// const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
// food.sort();
// console.log(food);

// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){ return a - b });
// console.log(points); 
// // [1, 5, 10, 25, 40, 100]

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// // expected output: 12
// var points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});
// console.log(points);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// console.log(fruits)

// const students = [
//     { name: 'Maria', note: 70, approved: '' },
//     { name: 'José', note: 56, approved: '' },
//     { name: 'Roberto', note: 90, approved: '' },
//     { name: 'Ana', note: 81, approved: '' }
//   ];
  
//   function verifyNote (student){
//     if (student.note >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
  
//   students.forEach(verifyNote);
  
//   console.log(students);

//   const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find(number => number % 5 === 0);
// const allMultipleOf5 = numbers.filter(number => number % 5 === 0);

// console.log(firstMultipleOf5);
// console.log(allMultipleOf5);

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

const verifyFirstLetterOfAll = (letter, names) => {
    return names.every((name) => name[0] === letter);
  };

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetterOfAll('J', listNames)); // false né?!  
