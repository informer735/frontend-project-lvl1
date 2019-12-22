/* eslint-disable no-case-declarations */
import readlinesync from 'readline-sync';

let userName = '';

export const printStartMessage = (descript) => {
  const message = 'Welcome to the Brain Games!\n';
  console.log(message + descript);
};

export const greeting = (descript) => {
  printStartMessage(descript);
  userName = readlinesync.question(' May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const attempt = (rigthAnswer, question) => {
  console.log(`Question: ${question}`);
  const answer = readlinesync.question('Your answer: ');
  if (rigthAnswer === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'. Let's try again, ${userName}!`);
    return false;
  }
  return true;
};

export const gameIngine = (func, numOfRound) => {
  const isRigth = func();

  if (isRigth) {
    if (numOfRound !== 0) {
      gameIngine(func, numOfRound - 1);
    } else {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
