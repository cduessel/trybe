const express = require('express');
const app = express();

app.get('/ping', function(req, res){
  res.jason({ "message": "Pong!" });
});

// app.route('/hello')
// .post(function(req, res){
//   const nome = req.name;
//   res.jason({ "message": `Hello, ${nome}` });
// });
app.use(express.json())
app.post('/hello', function(req, res){
  // const name = req.query.name;
  // const age = req.query.age;
  // (age > 17) 
  //  ? res.status(200).json({ "message": `Hello, ${name}`})
  //  : res.status(401).json({ "message": "Unauthorized"});
// console.log(req.body);
res.status(200).json({"message": `Hello, ${req.name}`})
});

app.put('/users/:name/:age', function(req, res){
  const nome = req.params.name;
  const idade = req.params.age;
  res.json({ "message": `Seu nome é ${nome} e você tem ${idade} anos de idade` })
});

app.listen(3000, function(req, res){
  console.log('ouvindo porta 3000')
});
