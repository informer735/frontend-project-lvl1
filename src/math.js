const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random()
  * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

export default getRandomInt;
