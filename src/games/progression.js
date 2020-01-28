import main from '..';
import getRandomInt from '../math';

const description = 'What number is missing in the progression?';
const lengthOfProgression = 10;

const getProgression = (start, step, lenOfProgression) => {
  const progression = [];

  for (let i = 0; i < lenOfProgression; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getQuestionForUser = (progression, missIndex) => {
  progression.splice(missIndex, 1, '..');
  return progression.join(' ');
};

const getRigthAnswer = (progression, index) => String(progression[index]);

const getGameData = () => {
  const start = getRandomInt(1, 50);
  const step = getRandomInt(1, 10);
  const progression = getProgression(start, step, lengthOfProgression);
  const missedIndex = getRandomInt(0, lengthOfProgression - 1);

  return [
    getRigthAnswer(progression, missedIndex),
    getQuestionForUser(progression, missedIndex),
  ];
};

export default () => {
  main(getGameData, description);
};
