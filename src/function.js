function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomList() {
  const randomList = [];
  let start = getRandomInt(50);
  const step = getRandomInt(9) + 1;
  let count = 10;
  while (count > 0) {
    randomList.push(start);
    start += step;
    count -= 1;
  }
  return randomList;
}

export { getRandomInt, getRandomList };
