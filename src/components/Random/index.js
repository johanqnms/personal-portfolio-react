/*export const Random = () => {
  const cities = [
    "Bogota",
    "Medellin",
    "Cali",
    "Bucaramanga",
    "Cartagena",
    "Santa Marta",
  ];

  const city = cities[Math.floor(Math.random() * cities.length)];
  return city;
}; */
const cities = [
  "Bogota",
  "Medellin",
  "Cali",
  "Bucaramanga",
  "Cartagena",
  "Santa Marta",
];

const RandomCity = () => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  return city;
};

module.exports = RandomCity;
