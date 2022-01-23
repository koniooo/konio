export const getRoundedNum = (value: number, base: number): number => {
  return Math.round(value * base) / base;
};
