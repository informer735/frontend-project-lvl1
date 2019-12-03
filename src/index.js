import readlinesync from 'readline-sync';

export const getName = () => {
  return readlinesync.question(' May I have your name? ');
};

export const greeting = () => {
  console.log(`Hello, ${getName()}!`);
}