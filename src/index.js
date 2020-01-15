import readlinesync from 'readline-sync';

export const numberOfRounds = 3;

const printDescription = (description) => {
  console.log(`${description}\n`);
};

const greeting = (name) => {
  console.log(`Hello, ${name}!\n`);
};

const getGameResult = (gameData, userName) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [rigthAnswer, question] of gameData) {
    console.log(`Question: ${question}`);
    const answer = readlinesync.question('Your answer: ');
    if (rigthAnswer === answer) {
      console.log('Correct!');
    } else {
      return `'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'. Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

export const main = (data, description) => {
  console.log('Welcome to the Brain Games!');
  printDescription(description);
  const userName = readlinesync.question(' May I have your name? ');
  greeting(userName);
  console.log(getGameResult(data, userName));
};
