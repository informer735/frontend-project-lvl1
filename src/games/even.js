import {
  main,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

function getDataFromGame(numberOfRounds) {
  const data = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const rigthAnswer = (isEven(question)) ? 'yes' : 'no';
    const questionForUser = String(question);

    data.push([
      rigthAnswer,
      questionForUser,
    ]);
  }
  return data;
}
const dataFromGame = getDataFromGame(numberOfRound);

export default () => {
  main(dataFromGame, description);
};
