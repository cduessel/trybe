const defaultPlants = require("./data.js");
const getAll = () => defaultPlants;

const getById = (id) => defaultPlants.find((plant) => {plant.id === id});

const getSunnyById = (id) => defaultPlants.find((plant) => {plant.id === id && plant.needsSun});

const create = (id, breed, needsSun, origin, specialCare, size) => defaultPlants.push({id, breed, needsSun, origin, specialCare, size});

const exclude = (id) => defaultPlants.filter((plant) => plant.id != id);

const update= (id, breed, needsSun, origin, specialCare, size) => {
  exclude(id);
  create (id, breed, needsSun, origin, specialCare, size);
  return defaultPlants;
};

  module.exports = {
    getAll,
    getById,
    getSunnyById,
    create,
    update,
    exclude,
  };

  // const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  //   const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
  //     : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  //   const newPlant = {
  //     id,
  //     breed,
  //     needsSun,
  //     origin,
  //     specialCare: {
  //       waterFrequency,
  //       ...specialCare,
  //     },
  //     size,
  //   };
  //   return newPlant;
  // };
  
  // const savePlants = () => {
  //   const plants = JSON.stringify(defaultPlants);
  //   localStorage.setItem("plants", plants);
  // };
  
  // const getPlants = () => {
  //   const plants = JSON.parse(localStorage.getItem("plants"));
  //   return plants;
  // };
  
  // const getPlantById = (id) => {
  //   return defaultPlants.filter((plant) => plant.id === id);
  // };
  
  // const removePlantById = (id) => {
  //   const newPlants = defaultPlants.filter((plant) => plant.id !== id);
  //   localStorage.setItem("plants", JSON.stringify(newPlants));
  // };
  
  // const getPlantsThatNeedsSunWithId = (id) => {
  //   const filteredPlants = defaultPlants.filter((plant) => {
  //     if (plant.needsSun && plant.id === id) {
  //       if (plant.specialCare.waterFrequency > 2) {
  //         return plant;
  //       }
  //     }
  //   });
  //   localStorage.setItem("plants", JSON.stringify(filteredPlants));
  //   return filteredPlants;
  // };
  
  // const editPlant = (plantId, newPlant) => {
  //   return defaultPlants.map((plant) => {
  //     if (plant.id === plantId) {
  //       return newPlant;
  //     }
  //     return plant;
  //   });
  // };
  
  // const createNewPlant = (plant) => {
  //   const mappedPlant = initPlant({ ...plant });
  //   defaultPlants.push(mappedPlant);
  //   createdPlants++;
  //   localStorage.setItem("createdPlants", String(createdPlants));
  //   localStorage.setItem("plants", JSON.stringify(defaultPlants));
  //   return defaultPlants;
  // };
  