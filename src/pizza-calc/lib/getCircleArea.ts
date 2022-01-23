// argument must be diameter
export const getCircleArea = (diameter: number): number => {
  const radius: number = diameter / 2;
  return Math.pow(radius, 2) * Math.PI;
};
