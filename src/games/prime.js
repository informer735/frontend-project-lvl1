import { attempt, gameIngine, greeting } from '..';
import { getRandomInt } from '../math';

const discript = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

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
