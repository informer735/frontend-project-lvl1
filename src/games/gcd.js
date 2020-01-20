import {
  main,
  numberOfRounds,
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

const getQuestionForUser = (num1, num2) => `${num1} ${num2}`;
const getRigthAnswer = (num1, num2) => String(findGcd(num1, num2));

const getGameData = () => {
  const data = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const number1 = getRandomInt();
    const number2 = getRandomInt();

    data.push([
      getRigthAnswer(number1, number2),
      getQuestionForUser(number1, number2),
    ]);
  }
  return data;
};
const gameData = getGameData(numberOfRounds);

export default () => {
  main(gameData, description);
};
