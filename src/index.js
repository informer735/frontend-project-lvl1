import readlinesync from 'readline-sync';

export const numberOfRound = 3;
let userName = '';

const printStartMessage = (description) => {
  const message = 'Welcome to the Brain Games!';
  console.log(`${message}\n${description}\n`);
};

const greeting = () => {
  userName = readlinesync.question(' May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

const gamePlay = (dataFromGame) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [rigthAnswer, question] of dataFromGame) {
    console.log(`Question: ${question}`);
    const answer = readlinesync.question('Your answer: ');
    if (rigthAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'. Let's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export const main = (data, description) => {
  printStartMessage(description);
  greeting();
  gamePlay(data);
};
