const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd", // this element should be filtered
];

const checkLength = (numbers) => {
  if (numbers.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (array) => {
  return array.filter(checkLength);
};

console.log(filterLongNumbers(numbers)); // Print the filtered array

console.log(filterLongNumbers(["4763687363", "7867867862"])); // Print filtered array with new arguments

console.log(filterLongNumbers([])); // Print filtered array with empty array argument
