import readlinesync from 'readline-sync';

const userName = readlinesync.question(' May I have your name? ');

export const greeting = () => {
  console.log(`Hello, ${userName}!`);
  console.log();
};

export const brainEven = () => {
  let count = 0;
  const maxCount = 3;
  let resault = '';

  while (count < maxCount) {
    const num = Math.floor(Math.random() * 100);
    const res = (num % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const answer = readlinesync.question('Your answer: ');
    if (res === answer) {
      console.log('Correct!');
      if (count === 2) {
        resault = `Congratulations, ${userName}!`;
      }
      count += 1;
    } else {
      resault = `'${answer}' is wrong answer ;(. Correct answer was '${res}'. Let's try again, ${userName}!`;
      break;
    }
  }

  console.log(resault);
};
