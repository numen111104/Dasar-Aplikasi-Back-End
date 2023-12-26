const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 4, 5, 3, 45, 2, 43, 523, 5];
const evenNumbers = numbers.filter((number)=> number % 2 === 0);
console.log(evenNumbers);

const arrays = [1, 2, 3, 4, 5, 6];
const oddArrays = arrays.filter((number)=> number % 2 !== 0);
console.log(`Nilai Ganjil dari arrays adalah: ${oddArrays}`);
