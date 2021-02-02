const express = require('express');
const bodyParser = require('body-parser');

const getCep = require('./controllers/cepController');

const app = express();

app.use(bodyParser.json());

// app.get('/:id', getCep.getCepControlled());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
