import {
  gameIngine,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'What number is missing in the progression?\n';

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

const questionForUser = (arr, num) => {
  arr.splice(num, 1, '..');
  return arr.join(' ');
};

const rigthAnswer = (Arr, num) => String(Arr[num]);

function dataFromGame(rounds) {
  const data = [];
  for (let i = 0; i < rounds; i += 1) {
    const randList = getRandomList();
    const missingNumber = getRandomInt(10);

    data.push([
      rigthAnswer(randList, missingNumber),
      questionForUser(randList, missingNumber),
    ]);
  }
  return data;
}
const data = dataFromGame(numberOfRound);

export default () => {
  gameIngine(data, description);
};
