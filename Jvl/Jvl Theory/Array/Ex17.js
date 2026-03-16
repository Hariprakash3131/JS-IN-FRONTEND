// Calculate the average of all numbers in an array.
let numbers=[25,50,75,100,200]
const sum = numbers.reduce((acc, val) => acc + val, 0);
let total=sum/numbers.length
console.log(total)