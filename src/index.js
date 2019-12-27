import readlinesync from 'readline-sync';

let userName = '';
export const numberOfRound = 3;

const printStartMessage = (description) => {
  const message = 'Welcome to the Brain Games!\n';
  console.log(message + description);
};

const greeting = (description) => {
  printStartMessage(description);
  userName = readlinesync.question(' May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};


export const gameIngine = (data, descript) => {
  let isWin = true;

  greeting(descript);
  // eslint-disable-next-line no-restricted-syntax
  for (const [rigthAnswer, question] of data) {
    console.log(`Question: ${question}`);
    const answer = readlinesync.question('Your answer: ');
    if (rigthAnswer === answer) {
      console.log('Correct!');
    } else {
      isWin = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'. Let's try again, ${userName}!`);
      break;
    }
  }
  if (isWin) console.log(`Congratulations, ${userName}!`);
};
