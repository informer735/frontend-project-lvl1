import {
  gameIngine,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (number) => number % 2 === 0;
const rigthAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const questionForUser = (num) => String(num);


function dataFromGame(rounds) {
  const data = [];
  for (let i = 0; i < rounds; i += 1) {
    const number = getRandomInt(100);

    data.push([
      rigthAnswer(number),
      questionForUser(number),
    ]);
  }
  return data;
}
const data = dataFromGame(numberOfRound);

export default () => {
  gameIngine(data, description);
};
