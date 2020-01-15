import {
  main,
  numberOfRounds,
} from '..';
import getRandomInt from '../math';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getProgression = (start, step, lenOfProgression) => {
  const progression = [];
  let len = lenOfProgression;
  let number = start;
  while (len > 0) {
    progression.push(number);
    number += step;
    len -= 1;
  }
  return progression;
};

const questionForUser = (progression, num) => {
  progression.splice(num, 1, '..');
  return progression.join(' ');
};

const rigthAnswer = (progression, num) => String(progression[num]);

const getGameData = (numOfRounds) => {
  const data = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    const start = getRandomInt(1, 50);
    const step = getRandomInt(1, 10);
    const progression = getProgression(start, step, lengthOfProgression);
    const missingNumber = getRandomInt(0, lengthOfProgression);

    data.push([
      rigthAnswer(progression, missingNumber),
      questionForUser(progression, missingNumber),
    ]);
  }
  return data;
};
const gameData = getGameData(numberOfRounds);

export default () => {
  main(gameData, description);
};
