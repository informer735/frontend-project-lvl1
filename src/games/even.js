import {
  main,
  numberOfRounds,
} from '..';
import getRandomInt from '../math';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const data = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt();
    const rigthAnswer = (isEven(question)) ? 'yes' : 'no';
    const questionForUser = String(question);

    data.push([
      rigthAnswer,
      questionForUser,
    ]);
  }
  return data;
};

const gameData = getGameData(numberOfRounds);

export default () => {
  main(gameData, description);
};
