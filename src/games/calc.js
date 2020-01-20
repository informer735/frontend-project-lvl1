import {
  main,
  numberOfRounds,
} from '..';
import getRandomInt from '../math';

const description = 'What is the result of the expression?';

const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomInt(0, operators.length - 1);
  return operators[index];
};

const calculation = (operand1, operand2, operation) => {
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
      return false;
  }
  return result;
};

const getGameData = () => {
  const data = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const operand1 = getRandomInt(1, 100);
    const operand2 = getRandomInt(1, 100);
    const operation = randomOperator();

    const rigthAnswer = String(calculation(operand1, operand2, operation));
    const questionForUser = `${operand1} ${operation} ${operand2}`;

    data.push([
      rigthAnswer,
      questionForUser,
    ]);
  }
  return data;
};
const gameData = getGameData(numberOfRounds);

export default () => {
  main(gameData, description);
};
