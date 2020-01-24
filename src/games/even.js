import main from '..';
import getRandomInt from '../math';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomInt();
  const rigthAnswer = (isEven(question)) ? 'yes' : 'no';

  return [rigthAnswer, String(question)];
};

export default () => {
  main(getGameData, description);
};
