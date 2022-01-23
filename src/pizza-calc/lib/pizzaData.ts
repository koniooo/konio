interface pizzaStore {
  name: string;
  diameter: number[];
  price: number[];
}

export const pizzaData: readonly pizzaStore[] = [
  {
    name: "ドミノピザ",
    diameter: [23, 28, 33],
    price: [1980, 2579, 3180],
  },
  {
    name: "ピザーラ",
    diameter: [18, 25, 36],
    price: [1100, 1980, 3140],
  },
  {
    name: "ピザハット",
    diameter: [15, 26, 31],
    price: [756, 1944, 3024],
  },
  {
    name: "ナポリの窯",
    diameter: [25, 30, 40],
    price: [1706, 2462, 4136],
  },
];
