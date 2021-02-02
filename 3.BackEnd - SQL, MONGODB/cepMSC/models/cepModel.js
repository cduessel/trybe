const connectionApi = require('./connectionAPI');
const connectionBD = require('./connectionMongo');

const { ObjectId } = require('mongodb');

// const findCep = findOne

// const addCep = pega dados insertOne

// : CEP, UF, cidade, bairro e logradouro 

const getCepBD = async (cep) => {
  const cepBD = connectionBD().then(db.collection('CEP').findOne(ObjectId(cep)));
  if (!cepBD) return null; //precisa?
  return cepBD;
};

const findAddCEP = async (cep) => {
  const getCep = await connectionApi.getApi(cep);
  if(!getCep){
    return error // ??
  };
  const { cep, uf, cidade, bairro, logradouro } = getCep;

  connectionBD().then((db) => db.collection('CEP').insertOne({ cep, uf, cidade, bairro, logradouro }));
  // console.log(getCep);
  return getCep; // ?
}

module.exports = {
  getCepBD,
  findAddCEP,
};
