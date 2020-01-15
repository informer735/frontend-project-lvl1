import {
  main,
  numberOfRounds,
} from '..';
import getRandomInt from '../math';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Number(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getDataGame = (numOfRounds) => {
  const data = [];
  for (let i = 0; i < numOfRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const rigthAnswer = isPrimeNumber(question) ? 'yes' : 'no';
    const questionForUser = String(question);

    data.push([
      rigthAnswer,
      questionForUser,
    ]);
  }
  return data;
};
const gameData = getDataGame(numberOfRounds);

export default () => {
  main(gameData, description);
};
