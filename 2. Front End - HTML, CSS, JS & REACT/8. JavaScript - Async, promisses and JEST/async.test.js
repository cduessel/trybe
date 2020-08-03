const async = require('./promissesCallbsAsyncs');

// ex1:

test('testar se vai para upperCase', done => {
  async.uppercase('Muda essa piromba para maiusculo', (frase) => {  
    expect(frase).toMatch('MUDA ESSA PIROMBA PARA MAIUSCULO');
    done();
    } 
    )
})

//ex 2 e 3:
const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('testes se retorna ou não usuario', () => {
  test('Retorne o nome do usuario', () => {
    expect.assertions(1);
    return getUserName(4).then(user => {
      expect(user).toEqual('Mark');
    });
  });
  test('Retorne o nome do usuario com ERRO', () => {
    expect.assertions(1);
  return getUserName(69).catch(error => {
    expect(error).toEqual({ error: 'User with ' + 69 + ' not found.' });
  });
});
})

describe('testes se retorna ou não usuario com ASYNC AWAIT', () => {
  test('retorne nome do usuario async', async () => {
    const nome = 'Mark';
    expect.assertions(2);
    await expect(getUserName(4)).resolves.toEqual(nome);
    await expect(getUserName(69)).rejects.toEqual({ error: 'User with ' + 69 + ' not found.' })
  })
})

// ex 4 não funfa

// const fetch = require('node-fetch');

// const getRepos = (url) => {
//   return fetch(url)
//     .then(response => response.json())
//     .then((data) => {
//       return data.map((repo) => repo.name)
//     });
// }

// describe('testes para ver se função retorna nome do repo', () => {
//   test('retorne nome do repo do git', () => {
//     const urlgit = 'https://api.github.com/users/tryber/repos';
//       return getRepos(urlgit).then(lista => {
//       expect(lista).toContain('sd-01-week4-5-project-todo-list');
//       expect(lista).toContain('sd-01-week4-5-project-meme-generator');
//     })
//   })
// })

// describe('testes para ver se função retorna nome do repo', () => {
//   test('retorne nome do repo do git', async () => {
//     const urlgit = 'https://api.github.com/users/tryber/repos';
//     expect.assertions(2);
//     await expect(getRepos(urlgit)).resolves.toContain('sd-01-week4-5-project-todo-list');
//     await expect(getRepos(urlgit)).resolves.toContain('sd-01-week4-5-project-meme-generator');
//     // await expect(getUserName(69)).rejects.toEqual({ error: 'User with ' + 69 + ' not found.' })
//   })
// })  

// ex 5
// 1 - 4 beforeEach(() => console.log('1 - beforeEach'));
// 3- 8 afterEach(() => console.log('1 - afterEach'));

// 2 test('', () => console.log('1 - test'));

//describe('Scoped / Nested block', () => {
  // 5 beforeEach(() => console.log('2 - beforeEach'));
  // 7 afterEach(() => console.log('2 - afterEach'));

  // 6 test('', () => console.log('2 - test'));
// });

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

//   6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise((resolve, reject) => {
    const findName = Animals.find(bichos => bichos.name === name);
    if(findName !== undefined){
      return resolve(findName);
    }
    return reject('Nenhum animal com esse nome!');

  })
  
);

const getAnimal = (name) => {
  // Adicione o código aqui.
 return findAnimalByName(name).then(animal=>animal)
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
// mock!
// fix ex 1:
async function somar(a, b) { await sleep(1000); return a + b }; // Função de somar mais lenta do mundo
function subtrair(a, b) { return a - b };
function multiplicar(a, b) {return a * b};
function dividir(a, b) {return a / b};

test('testar funcao sub', () => {

subtrair = jest.fn().mockImplementation((a, b) => a - b - 1)

expect(subtrair(3,1)).toBe(1)
expect(subtrair).toHaveBeenCalled();
})

test('testar multi', () => {

  multiplicar = jest.fn().mockReturnValue(10)

  expect(multiplicar(5,3)).toBe(10)
  expect(multiplicar).toHaveBeenCalled()
})

test('testar Soma', () => {

  somar = jest.fn().mockImplementation((a, b) => a + b)

  expect(somar(3,4)).toBe(7)
  expect(somar).toHaveBeenCalled()

})
// mock exercises:

function randomNumber() { return(Math.random() * 100) };

function isDivisible(number) {(randomNumber() % number) === 0};

//ex fixação
test('testar se chamamos random dentro de isDivisible', () => {

  randomNumber = jest.fn()

isDivisible()
expect(randomNumber).toHaveBeenCalled()

})

// exercicios
test('testar randomNumber', () => {

randomNumber = jest.fn()
.mockReturnValueOnce(10)
.mockImplementationOnce((a, b) => a / b)
.mockImplementationOnce((a,b,c) => a * b * c)
.mockImplementationOnce(a => a * 2)

expect(randomNumber()).toBe(10)
expect(randomNumber).toHaveBeenCalled()
expect(randomNumber(6, 3)).toBe(2)
expect(randomNumber).toHaveBeenCalledTimes(2)
expect(randomNumber(1, 3, 1)).toBe(3)
expect(randomNumber).toHaveBeenCalledTimes(3)
expect(randomNumber(3)).toBe(6)
expect(randomNumber).toHaveBeenCalledTimes(4)

})

