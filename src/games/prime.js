import {
  gameIngine,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const rigthAnswer = (num) => {
  if (num > 3) {
    for (let i = 2; i <= Number(num / 2); i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
  }
  return 'yes';
};

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
