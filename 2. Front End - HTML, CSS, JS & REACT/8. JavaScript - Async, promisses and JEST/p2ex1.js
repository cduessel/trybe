const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// console.log(planetDistanceFromSun(mars)); // A 1
// console.log(planetDistanceFromSun(venus)); // B 2 
// console.log(planetDistanceFromSun(jupiter)); // C 3

// console.log(planetDistanceFromSun(mars)); // 1
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // 3
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // 1

const getPlanet = () => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    setTimeout(() => console.log("Returned planet: ", mars), 4000);
  };
  
getPlanet(); // imprime Marte depois de 4 se