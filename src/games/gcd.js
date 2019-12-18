export const question = (a, b) => `${a} ${b}`;

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
