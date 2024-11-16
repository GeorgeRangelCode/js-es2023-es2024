const fruits = ["🍓", "🍌", "🍎"];

console.log({ fruits });

const copyFruits = [...fruits];
copyFruits[1] = "🥑";
console.log({ copyFruits });

const copyInproveFruits = fruits.with(1, "🥑");
console.log({ copyInproveFruits });
