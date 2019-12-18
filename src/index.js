/* eslint-disable no-case-declarations */
import readlinesync from 'readline-sync';
import * as calc from './games/calc';
import * as even from './games/even';
import * as gcd from './games/gcd';
import * as progress from './games/progression';
import * as prime from './games/prime';
import { getRandomInt, getRandomList } from './function';

let userName = '';

const printStartMessage = (gameName) => {
  let message = 'Welcome to the Brain Games!\n';

  switch (gameName) {
    case 'Brain-even':
      message += 'Answer "yes" if the number is even, otherwise answer "no".\n';
      break;
    case 'Brain-calc':
      message += 'What is the result of the expression?\n';
      break;
    case 'Brain-gcd':
      message += 'Find the greatest common divisor of given numbers.\n';
      break;
    case 'brain-progression':
      message += 'What number is missing in the progression?\n';
      break;
    case 'brain-prime':
      message += 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
      break;
    default:
      break;
  }
  console.log(message);
};

export const greeting = (gameName) => {
  printStartMessage(gameName);
  userName = readlinesync.question(' May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const gameEngine = (gameName) => {
  let count = 0;
  const tryCount = 3;
  let finishMessage = `Congratulations, ${userName}!`;

  while (count < tryCount) {
    let rigthAnswer = '';
    let questionString = '';
    switch (gameName) {
      case 'Brain-calc':
        const num1 = getRandomInt(100);
        const num2 = getRandomInt(100);
        const operator = calc.randomOperator();
        rigthAnswer = calc.rigthAnswer(num1, num2, operator);
        questionString = calc.question(num1, num2, operator);
        break;
      case 'Brain-even':
        const num = getRandomInt(100);
        rigthAnswer = even.rigthAnswer(num);
        questionString = even.question(num);
        break;
      case 'Brain-gcd':
        const num3 = getRandomInt(100);
        const num4 = getRandomInt(100);
        rigthAnswer = gcd.rigthAnswer(num3, num4);
        questionString = gcd.question(num3, num4);
        break;
      case 'brain-progression':
        const numPro = getRandomInt(10);
        const resPro = getRandomList();
        rigthAnswer = progress.rigthAnswer(resPro, numPro);
        questionString = progress.question(resPro, numPro);
        break;
      case 'brain-prime':
        const numPrime = getRandomInt(100);
        rigthAnswer = prime.rigthAnswer(numPrime);
        questionString = prime.question(numPrime);
        break;
      default:
        break;
    }

    console.log(`Question: ${questionString}`);
    const answer = readlinesync.question('Your answer: ');
    if (rigthAnswer === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      finishMessage = `'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'. Let's try again, ${userName}!`;
      break;
    }
  }
  console.log(finishMessage);
};
