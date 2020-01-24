import readlinesync from 'readline-sync';

const numberOfRounds = 3;

const printStartMessage = (description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
};

const greeting = (name) => {
  console.log(`Hello, ${name}!\n`);
};

const playGameRound = (gameData, userName) => {
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [rigthAnswer, question] = gameData();
    console.log(`Question: ${question}`);
    const answer = readlinesync.question('Your answer: ');

    if (rigthAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rigthAnswer}'. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default (gameData, description) => {
  printStartMessage(description);
  const userName = readlinesync.question(' May I have your name? ');
  greeting(userName);
  playGameRound(gameData, userName);
};
