/* eslint-disable no-case-declarations */
import readlinesync from 'readline-sync';
import * as calc from './games/calc';
import * as even from './games/even';
import * as gcd from './games/gcd';
import * as progress from './games/progression';

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
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandArr() {
  const res = [];
  let start = getRandomInt(50);
  const step = getRandomInt(9) + 1;
  let count = 10;
  while (count > 0) {
    res.push(start);
    start += step;
    count -= 1;
  }
  return res;
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
        const num1 = getRandomInt(100);
        const num2 = getRandomInt(100);
        const operator = calc.randomOperator();
        res = calc.rigthAnswer(num1, num2, operator);
        question = calc.question(num1, num2, operator);
        break;
      case 'Brain-even':
        const num = getRandomInt(100);
        res = even.rigthAnswer(num);
        question = even.question(num);
        break;
      case 'Brain-gcd':
        const num3 = getRandomInt(100);
        const num4 = getRandomInt(100);
        res = gcd.rigthAnswer(num3, num4);
        question = gcd.question(num3, num4);
        break;
      case 'brain-progression':
        const numPro = getRandomInt(10);
        const resPro = getRandArr();
        res = progress.rigthAnswer(resPro, numPro);
        question = progress.question(resPro, numPro);
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
