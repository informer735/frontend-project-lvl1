import { attempt, gameIngine, greeting } from '..';
import { getRandomInt } from '../math';

const discript = 'Find the greatest common divisor of given numbers.\n';

const question = (a, b) => `${a} ${b}`;

const rigthAnswer = (num1, num2) => {
  let a = num1;
  let b = num2;
  if (b > a) {
    [a, b] = [b, a];
  }
  if (b === 0) {
    return String(a);
  }
  return rigthAnswer(b, a % b);
};

const isRigth = () => {
  const a = getRandomInt(100);
  const b = getRandomInt(100);
  const rigth = rigthAnswer(a, b);
  const quest = question(a, b);

  return attempt(rigth, quest);
};

export default () => {
  greeting(discript);
  gameIngine(isRigth, 2);
};
