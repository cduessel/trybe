const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controller');

const app = express();

app.use(bodyParser.json());

app.get('/plants', controller.getAll);

app.get('/plants/:id', controller.getById);

app.get('/sunny/:id', controller.getSunnyById);

app.post('/plants', controller.create);

app.post('/plants/:id', controller.update);

app.delete('/plants/:id', controller.remove);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`o pai tá ON na: ${PORT}`);
});
