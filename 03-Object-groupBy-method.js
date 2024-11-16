const numbers = [1, 2, 3, 4, 5, 6];

/* const result = {
  agrupado: {
    impar: [1, 3, 5],
    par: [2, 4, 6],
  },
};
 */

let grouped = {
  impar: [],
  par: [],
};

numbers.forEach((number) => {
  if (number % 2 === 0) {
    grouped.par.push(number);
  } else {
    grouped.impar.push(number);
  }
});

console.log({ grouped });

const groupedImprove = Object.groupBy(numbers, (numbers) => {
  if (numbers % 2 === 0) return "par";
  return "impar";
});

console.log({ groupedImprove });

const wizards = ["Harry", "Hermione", "Ron", "Snape", "Dumbledore"];

const groupedByFirstLetter = Object.groupBy(wizards, (wizard) => wizard[0]);

console.log({ groupedByFirstLetter });

const avengers = [
  { name: "Iron Man", powerLevel: 500 },
  { name: "Hulk", powerLevel: 9000 },
  { name: "Thor", powerLevel: 4500 },
  { name: "Captain America", powerLevel: 2000 },
  { name: "Black Widow", powerLevel: 9999 },
];

const groupedByPowerLevel = Object.groupBy(avengers, (avenger) => {
  if (avenger.powerLevel <= 500) return "alpha";
  if (avenger.powerLevel <= 5000) return "beta";
  return "omega";
});

console.log({ groupedByPowerLevel });
