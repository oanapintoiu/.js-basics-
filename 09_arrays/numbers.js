// Create an array of all numbers from 1 to 10.
// Calculate the sum of all these numbers by looping through the array.

// You can use the method forEach to iterate over each element.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let total = 0;

numbers.forEach((num) => {
  total += num;
});

console.log(total);
