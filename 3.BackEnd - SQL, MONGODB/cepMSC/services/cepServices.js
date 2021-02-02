const getCep = require('../models/cepModel');

// cep validation 8digitos
// getBD
// getAPI
// addBd

const cepIsValid = (cep) => {
  const regex = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/; // regex 00000-000 8 numeros hífem opcional
  return regex.test(cep);
}

const serviceCep = async (cep) => {
  if (!cep) {
    return res.status(400).json({ message: 'O campo "cep" é obrigatório' }); // pode colocar status aqui?
  } if (!cepIsValid) {
    return res.status(400).json({ message: 'O "cep" deve ter 8 numeros e estar no formato "00000-000"' }); // pode colocar status aqui?
  }
  const cepBd = await getCep.getCepBD(cep);
  if(!cepBd){
    const cepAPI = await getCep.findAddCEP(cep);
    if(!cepAPI){return null}
    return(cepApi);
  }
return error
};

module.exports = {
  serviceCep,
};
