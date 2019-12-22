import { attempt, gameIngine, greeting } from '..';
import { getRandomInt, randomOperator } from '../math';

const discript = 'What is the result of the expression?\n';

const question = (a, b, oper) => `${a} ${oper} ${b}`;

const rigthAnswer = (a, b, oper) => {
  let resault = '';
  if (oper === '+') resault = a + b;
  if (oper === '-') resault = a - b;
  if (oper === '*') resault = a * b;
  return String(resault);
};

const isRigth = () => {
  const a = getRandomInt(100);
  const b = getRandomInt(100);
  const oper = randomOperator();
  const rigth = rigthAnswer(a, b, oper);
  const quest = question(a, b, oper);

  return attempt(rigth, quest);
};

export default () => {
  greeting(discript);
  gameIngine(isRigth, 2);
};
