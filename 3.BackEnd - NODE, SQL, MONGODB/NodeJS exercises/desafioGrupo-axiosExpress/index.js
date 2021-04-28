const express = require('express');
const axios = require('axios');
const app = express();

function validate(token){
  const regToken = /^[A-z0-9]{12}/;
  if(!token || !regToken.test(token)){
    console.log("token inválido!");
  }
  return regToken.test(token);
};

app.get('/btc/price', async (req, res) => {
  const token = req.headers.authorization;
  console.log("token:", token);
  const validToken = validate(token);
  if(validToken){
    const url = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
    const dataApi = await axios.get(url).then(({ data }) => data);
    return res.json({ dataApi });
  }
  else {
    return res.json('Senha incorreta');
  }
});

app.listen(3000, ()=> console.log("o pai tá ON"));
