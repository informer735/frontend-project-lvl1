import {
  main,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'What number is missing in the progression?';
const lengthOfList = 10;

function getRandomList() {
  const randomList = [];
  let len = lengthOfList;
  let start = getRandomInt(1, 50);
  const step = getRandomInt(1, 11);
  while (len > 0) {
    randomList.push(start);
    start += step;
    len -= 1;
  }
  return randomList;
}

const questionForUser = (givenList, num) => {
  givenList.splice(num, 1, '..');
  return givenList.join(' ');
};

const rigthAnswer = (givenList, num) => String(givenList[num]);

function getDataFromGame(numberOfRounds) {
  const data = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randList = getRandomList();
    const missingNumber = getRandomInt(0, lengthOfList);

    data.push([
      rigthAnswer(randList, missingNumber),
      questionForUser(randList, missingNumber),
    ]);
  }
  return data;
}
const dataFromGame = getDataFromGame(numberOfRound);

export default () => {
  main(dataFromGame, description);
};
