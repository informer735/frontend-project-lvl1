import main from '..';
import getRandomInt from '../math';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getDataGame = () => {
  const question = getRandomInt();
  const rigthAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [rigthAnswer, String(question)];
};

export default () => {
  main(getDataGame, description);
};
