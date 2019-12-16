export const question = (num1, num2) => `${num1} ${num2}`;

export const rigthAnswer = (num1, num2) => {
  let a = num1;
  let b = num2;
  if (b > a) {
    [a, b] = [b, a];
  }
  if (b === 0) {
    return String(a);
  }
  return rigthAnswer(b, a % b);
};
