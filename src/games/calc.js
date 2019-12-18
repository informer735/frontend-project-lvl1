
export const randomOperator = () => {
  const randNum = Math.random();
  if (randNum < 0.33) return '+';
  if (randNum < 0.66) return '-';
  return '*';
};

export const question = (a, b, oper) => `${a} ${oper} ${b}`;

export const rigthAnswer = (a, b, oper) => {
  let resault = '';
  if (oper === '+') resault = a + b;
  if (oper === '-') resault = a - b;
  if (oper === '*') resault = a * b;
  return String(resault);
};
