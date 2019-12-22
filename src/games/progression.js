import { attempt, gameIngine, greeting } from '..';
import { getRandomInt, getRandomList } from '../math';

const discript = 'What number is missing in the progression?\n';

export const question = (arr, num) => {
  arr.splice(num, 1, '..');
  return arr.join(' ');
};

export const rigthAnswer = (Arr, num) => String(Arr[num]);

const isRigth = () => {
  const randList = getRandomList();
  const a = getRandomInt(10);
  const rigth = rigthAnswer(randList, a);
  const quest = question(randList, a);

  return attempt(rigth, quest);
};

export default () => {
  greeting(discript);
  gameIngine(isRigth, 2);
};
