const getCep = require('../services/cepServices');

const getCepControlled = async (req, res) => {
const { cep } = req.params;
const result = await getCep.serviceCep(cep);
res.status(200).json(result);
}

module.exports = {
  getCepControlled,
};
