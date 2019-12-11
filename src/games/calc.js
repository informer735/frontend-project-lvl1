
export const randomOperator = () => {
  const num = Math.random();
  if (num < 0.33) return '+';
  if (num < 0.66) return '-';
  return '*';
};

export const question = (num1, num2, oper) => `${num1} ${oper} ${num2}`;

export const rigthAnswer = (num1, num2, oper) => {
  let res = '';
  if (oper === '+') res = num1 + num2;
  if (oper === '-') res = num1 - num2;
  if (oper === '*') res = num1 * num2;
  return String(res);
};
