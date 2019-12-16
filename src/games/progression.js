export const question = (arr, num) => {
  arr.splice(num, 1, '..');
  return arr.join(' ');
};

export const rigthAnswer = (Arr, num) => String(Arr[num]);
