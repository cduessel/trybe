const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
// 1)Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  function adicionaEntries(objeto, chavis, valoris){
      objeto[chavis]=valoris;
  }
  adicionaEntries(lesson2, "turno", "manhã");

  // console.log(lesson2);

// 2)Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

  function listaKeys(objeto){
     let lista = Object.keys(objeto);
     return(lista)
  };

 // console.log(listaKeys(lesson3));

 // 3)Crie uma função para mostrar o tamanho de um objeto.

 function tamanho(objeto) {
  let size = Object.entries(objeto).length;
  return(size)
};
//console.log(tamanho(lesson1))

//4)Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

function listaValues(objeto){
    let vals = Object.values(objeto);
    return(vals)
}
//console.log(listaValues(lesson2))

//5)Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

Object.freeze(lesson1);
Object.freeze(lesson2);
Object.freeze(lesson3);

const allLessons = {};

allLessons.lesson1 = { materia: 'História'};

allLessons.lesson2 = {materia: 'História'};

allLessons.lesson3 = { materia: 'História'} ;

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

//console.log(allLessons)
//const allLessons = Object.assign({lesson1: lesson1}, {lesson2: lesson2}, {lesson3: lesson3});

// 6)Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numest = (allLessons.lesson1.numeroEstudantes)+(allLessons.lesson2.numeroEstudantes)+(allLessons.lesson3.numeroEstudantes);

// console.log(numest)
// 7)Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto

function getvalueByNum(obj, posicao){
    const chavinha = Object.keys(obj)[posicao];
    const valoe = obj[chavinha];
    return(valoe);
};

// console.log(getvalueByNum(lesson1, 0))

// 8)Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifyPair(objs, qui, walor){
    if(objs[qui] == walor){return(true)}
    else{return(false)};
};

// console.log(verifyPair(lesson3, 'turno', 'noite'))
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));