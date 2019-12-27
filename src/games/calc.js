import {
  gameIngine,
  numberOfRound,
} from '..';
import getRandomInt from '../math';

const description = 'What is the result of the expression?\n';

const randomOperator = () => {
  const randNum = Math.random();
  if (randNum < 0.33) return '+';
  if (randNum < 0.66) return '-';
  return '*';
};

const questionForUser = (operand1, operand2, operation) => `${operand1} ${operation} ${operand2}`;

const rigthAnswer = (operand1, operand2, operation) => {
  let result = '';
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      console.log('error');
  }
  return String(result);
};

function dataFromGame(rounds) {
  const data = [];
  for (let i = 0; i < rounds; i += 1) {
    const operand1 = getRandomInt(100);
    const operand2 = getRandomInt(100);
    const operation = randomOperator();

    data.push([
      rigthAnswer(operand1, operand2, operation),
      questionForUser(operand1, operand2, operation),
    ]);
  }
  return data;
}
const data = dataFromGame(numberOfRound);

export default () => {
  gameIngine(data, description);
};
