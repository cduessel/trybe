const axios = require('axios');

const URL = 'http://cep.la/';

const getApi = (cep) => await axios.get(`${URL}/${cep}`).then((response) => {return response});

module.exports = {
  getApi,
};
