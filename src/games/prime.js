export const rigthAnswer = (num) => {
  if (num > 3) {
    for (let i = 2; i <= Number(num / 2); i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
  }
  return 'yes';
};

export const question = (num) => String(num);
