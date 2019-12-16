/* eslint-disable no-case-declarations */
import readlinesync from 'readline-sync';
import * as calc from './games/calc';
import * as even from './games/even';
import * as gcd from './games/gcd';

let userName = '';

const printStartMessage = (gameName) => {
  let message = 'Welcome to the Brain Games!\n';

  switch (gameName) {
    case 'Brain-even':
      message = 'Answer "yes" if the number is even, otherwise answer "no".\n';
      break;
    case 'Brain-calc':
      message = 'What is the result of the expression?\n';
      break;
    case 'Brain-gcd':
      message = 'Find the greatest common divisor of given numbers.\n';
      break;
    default:
      break;
  }
  console.log(message);
};
function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

export const greeting = (gameName) => {
  printStartMessage(gameName);
  userName = readlinesync.question(' May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const gameEngine = (gameName) => {
  let count = 0;
  const maxCount = 3;
  let resault = `Congratulations, ${userName}!`;

  while (count < maxCount) {
    let res = '';
    let question = '';
    switch (gameName) {
      case 'Brain-calc':
        const num1 = getRandomInt();
        const num2 = getRandomInt();
        const operator = calc.randomOperator();
        res = calc.rigthAnswer(num1, num2, operator);
        question = calc.question(num1, num2, operator);
        break;
      case 'Brain-even':
        const num = getRandomInt();
        res = even.rigthAnswer(num);
        question = even.question(num);
        break;
      case 'Brain-gcd':
        const num3 = getRandomInt();
        const num4 = getRandomInt();
        res = gcd.rigthAnswer(num3, num4);
        question = gcd.question(num3, num4);
        break;
      default:
        break;
    }

    console.log(`Question: ${question}`);
    const answer = readlinesync.question('Your answer: ');
    if (res === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      resault = `'${answer}' is wrong answer ;(. Correct answer was '${res}'. Let's try again, ${userName}!`;
      break;
    }
  }
  console.log(resault);
};
