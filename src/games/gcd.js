import {
  main,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'Find the greatest common divisor of given numbers.';

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

function getDataFromGame(numberOfRounds) {
  const data = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);

    data.push([
      rigthAnswer(number1, number2),
      questionForUser(number1, number2),
    ]);
  }
  return data;
}
const dataFromGame = getDataFromGame(numberOfRound);

export default () => {
  main(dataFromGame, description);
};
