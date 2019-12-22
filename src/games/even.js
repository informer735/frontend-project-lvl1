import { attempt, gameIngine, greeting } from '..';
import { getRandomInt } from '../math';

const discript = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const rigthAnswer = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const question = (num) => String(num);

const isRigth = () => {
  const a = getRandomInt(100);
  const rigth = rigthAnswer(a);
  const quest = question(a);

  return attempt(rigth, quest);
};

export default () => {
  greeting(discript);
  gameIngine(isRigth, 2);
};
