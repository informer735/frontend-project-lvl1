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
  let currentElem = start;
  while (len > 0) {
    progression.push(currentElem);
    currentElem += step;
    len -= 1;
  }
  return progression;
};

const getQuestionForUser = (progression, missIndex) => {
  progression.splice(missIndex, 1, '..');
  return progression.join(' ');
};

const getRigthAnswer = (progression, index) => String(progression[index]);

const getGameData = () => {
  const data = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const start = getRandomInt(1, 50);
    const step = getRandomInt(1, 10);
    const progression = getProgression(start, step, lengthOfProgression);
    const missIndex = getRandomInt(0, lengthOfProgression - 1);

    data.push([
      getRigthAnswer(progression, missIndex),
      getQuestionForUser(progression, missIndex),
    ]);
  }
  return data;
};
const gameData = getGameData(numberOfRounds);

export default () => {
  main(gameData, description);
};
