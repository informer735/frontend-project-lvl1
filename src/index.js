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
    const firstRandomNumber = getRandomInt(100);
    const secondRandomNumber = getRandomInt(100);
    switch (gameName) {
      case 'Brain-calc':
        const operator = calc.randomOperator();
        rigthAnswer = calc.rigthAnswer(firstRandomNumber, secondRandomNumber, operator);
        questionString = calc.question(firstRandomNumber, secondRandomNumber, operator);
        break;
      case 'Brain-even':
        rigthAnswer = even.rigthAnswer(firstRandomNumber);
        questionString = even.question(firstRandomNumber);
        break;
      case 'Brain-gcd':
        rigthAnswer = gcd.rigthAnswer(firstRandomNumber, secondRandomNumber);
        questionString = gcd.question(firstRandomNumber, secondRandomNumber);
        break;
      case 'brain-progression':
        const numPro = getRandomInt(10);
        const resPro = getRandomList();
        rigthAnswer = progress.rigthAnswer(resPro, numPro);
        questionString = progress.question(resPro, numPro);
        break;
      case 'brain-prime':
        rigthAnswer = prime.rigthAnswer(firstRandomNumber);
        questionString = prime.question(firstRandomNumber);
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
