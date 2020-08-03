// const estudantes = [
//     {
//       nome: 'Jorge',
//       sobrenome: 'Silva',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: 67 },
//         { name: 'Português', nota: 79 },
//         { name: 'Química', nota: 70 },
//         { name: 'Biologia', nota: 65 }
//       ]
//     },
//     {
//       nome: 'Mario',
//       sobrenome: 'Ferreira',
//       idade: 15,
//       turno: 'Tarde',
//       materias: [
//         { name: 'Matemática', nota: '59' },
//         { name: 'Português', nota: '80' },
//         { name: 'Química', nota: '78' },
//         { name: 'Biologia', nota: '92' }
//       ]
//     },
//     {
//       nome: 'Jorge',
//       sobrenome: 'Santos',
//       idade: 15,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '76' },
//         { name: 'Português', nota: '90' },
//         { name: 'Química', nota: '70' },
//         { name: 'Biologia', nota: '80' }
//       ]
//     },
//     {
//       nome: 'Maria',
//       sobrenome: 'Silveira',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '91' },
//         { name: 'Português', nota: '85' },
//         { name: 'Química', nota: '92' },
//         { name: 'Biologia', nota: '90' }
//       ]
//     },
//     {
//       nome: 'Natalia',
//       sobrenome: 'Castro',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '70' },
//         { name: 'Português', nota: '70' },
//         { name: 'Química', nota: '60' },
//         { name: 'Biologia', nota: '50' }
//       ]
//     },
//     {
//       nome: 'Wilson',
//       sobrenome: 'Martins',
//       idade: 14,
//       turno: 'Manhã',
//       materias: [
//         { name: 'Matemática', nota: '80' },
//         { name: 'Português', nota: '82' },
//         { name: 'Química', nota: '79' },
//         { name: 'Biologia', nota: '75' }
//       ]
//     },
//   ]
  

// const allNameStudents = estudantes.filter((estudante) => (estudante.turno === 'Manhã')).map((estudante)=>`${estudante.nome} ${estudante.sobrenome}`);
  
// //  console.log(allNameStudents);

//   const reportStatus = (name, students) => {
//     const student = students.find((student) => student.nome === name);

//     return student.materias.map((materia) => (
//       `${materia.name} ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
//     ));
//   };
  
//  console.log(reportStatus('Natalia', estudantes));

//   const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   // console.log(result); // 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers);

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); 

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// const pairs = numbers.filter( num => num %2 === 0);
// const soma = (result, nummero) => {return result + nummero};
// const sumpair = pairs.reduce(soma);
// console.log(sumpair)

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 }
      ]
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' }
      ]
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' }
      ]
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' }
      ]
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' }
      ]
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' }
      ]
    },
  ];

  // Agora crie uma função usando os dados dos estudantes passados anteriormente, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor
  const matnota = (melhor, fach) => { if(melhor.nota > fach.nota) return melhor; return fach};

  const relatorium = (schueler) => { return schueler.map(
      (schueler) => {return {nome : schueler.nome, materia: schueler.materias.reduce(matnota).name};
});
};
  console.log(relatorium(estudantes));