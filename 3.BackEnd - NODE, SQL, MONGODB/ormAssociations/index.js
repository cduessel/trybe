// index.js
const express = require('express');
const { Addresses, Employees, Books, Users } = require('./models');

const app = express();

app.get('/employees', (_req, res) => Employees
  .findAll({ include: { model: Addresses, as: 'addresses' } })
  .then((answer) => res.status(200).json(answer))
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

app.get('/employees/:id', (req, res) => Employees
  .findAll({
    where: { employee_id: req.params.id },
    include: [{ model: Addresses, as: 'addresses',  attributes: { exclude: ['number'] }}],
  })
  .then((employee) => {
    if (!employee.length) {
      return res.status(404).send({ message: 'Funcionário não encontrado' });
    }
    if (req.query.includeAddresses === 'true') {
      return Addresses.findAll({ where: { employee_id: req.params.id } })
        .then((address) => res.status(200).json(
          { employee: employee[0], address },
        ));
    }

    return res.status(200).json(employee);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

  app.get('/usersbooks/:id', (req, res) => Users
  .findAll({
    where: { user_id: req.params.id },
    include: [{ model: Books, as: 'books', through: { attributes: [] } }],
  })
  .then((usersbooks) => {
    if (!usersbooks.length) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(usersbooks);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));
  
const PORT = 3000;
app.listen(PORT, () => console.log(`Port: ${PORT}`));
