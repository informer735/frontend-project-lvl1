import { readlinesync } from 'readline-sync';

export const getName = () => readlinesync.question(' May I have your name? ');

export const greeting = () => {
  console.log(`Hello, ${getName()}!`);
};
