const model = require('./model');

const getAll = async (req, res) => {
  try {
    const plants = model.getAll();

    res.status(200).json({ plants });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Algo deu ruim no getAll' });
  }
};

const getById = (req, res) => {
  const { id } = req.params;
  try {
    const plant = model.getById(id);

    res.status(200).json(plant);
  } catch (err) {
        res.status(500).json({ message: 'Algo deu errado getId' });
  }
};

const getSunnyById = (req, res) => {
  const { id } = req.params;
  try {
    const plant = model.getSunnyById(id);

    res.status(200).json(plant);
  } catch (err) {
        res.status(500).json({ message: 'Algo deu errado getId' });
  }
};

const create = async (req, res) => {
  const {id, breed, needsSun, origin, specialCare, size } = req.body;
  try {
    const createdPlant = model.create(id, breed, needsSun, origin, specialCare, size);
    res.status(201).json(createdPlant);
  } catch (err) {res.status(500).json({ message: 'Algo deu ruim no create' });
  }
};

const remove = (req, res) => {
  const { id } = req.params;
  try {
    const removed = model.exclude(id);
    res.status(200).json(removed);
  } catch (err) {
    res.status(500).json({ message: 'Algo deu errado no REMOVE' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { breed, needsSun, origin, specialCare, size } = req.body;
  try {
    const updatedPlant = model.update(id, breed, needsSun, origin, specialCare, size);
    res.status(200).json(updatedPlant);
  } catch (err) {
    res.status(500).json({ message: 'Algo deu errado no update' });
  }
};

module.exports = {
  getAll,
  getById,
  getSunnyById,
  create,
  update,
  remove,
};
