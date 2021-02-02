const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', (req, res, next) => {
  Book.findAll()
    .then((Books) => {
      res.status(200).json(Books);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado no findAll' });
    });
});

router.get('/:id', (req, res, next) => {
  Book.findByPk(req.params.id)
    .then((book) => {
      if (book === null) {
        return res.status(404).send({ message: 'Livro não encontrado' });
      }
      return res.status(200).json(book);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado no findByPk' });
    });
});

router.post('/', (req, res) => {
  const { title, author, pageQuantity } = req.body;

  Book.create({ title, author, pageQuantity }).then((book) => res.status(200).json(user))
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado no Create' });
    });
});

router.put('/:id', (req, res) => {
  const { title, author, pageQuantity } = req.body;

  Book.update(
    { title, author, pageQuantity },
    {
      where: { id: req.params.id },
    }
  ).then((result) => {
    res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
  })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado no UPDATE' });
    });
});

router.delete('/:id', (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.status(200).send({ message: `Usuário excluído com sucesso.` });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado no DESTROY' });
    });
});

module.exports = router;

