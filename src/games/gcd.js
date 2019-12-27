import {
  gameIngine,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'Find the greatest common divisor of given numbers.\n';

const findGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  if (b > a) {
    [a, b] = [b, a];
  }
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const questionForUser = (num1, num2) => `${num1} ${num2}`;
const rigthAnswer = (num1, num2) => String(findGcd(num1, num2));

function dataFromGame(rounds) {
  const data = [];
  for (let i = 0; i < rounds; i += 1) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);

    data.push([
      rigthAnswer(number1, number2),
      questionForUser(number1, number2),
    ]);
  }
  return data;
}
const data = dataFromGame(numberOfRound);

export default () => {
  gameIngine(data, description);
};
