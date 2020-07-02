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
