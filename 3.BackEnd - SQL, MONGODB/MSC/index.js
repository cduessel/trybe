const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const Author = require('../controllers/controller');

const app = express();

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Ouvindo a porta ${PORT}`);
// });

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
