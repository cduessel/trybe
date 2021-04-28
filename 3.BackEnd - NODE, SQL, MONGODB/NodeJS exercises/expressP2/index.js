const { json } = require('express');
const express = require('express');
const app = express();
const fs = require('fs').promises;

const readList = async () => {
  const list = await fs.readFile('simpsons.json', 'utf8');
  return JSON.parse(list)
};

app.get('/simpsons', async function(req, res){
  const data = await readList();
  res.status(200).send(data)
});

app.get('/simpsons/:id', async function(req, res){
  const data = await readList();
  const id = req.params.id;
  const result = data.find(personagem => personagem.id == id);
  res.status(200).send(result)
});

app.use(function (err, req, res, next) {
  res.status(500).send(`Deu ruim! ${err.message}`);
});

app.listen(3000, function(){
  console.log('ouvindo porta 3000')
});
