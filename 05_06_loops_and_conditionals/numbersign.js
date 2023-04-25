// use if, else if and else to write conditionals.
// use the strict equality operator === to compare values.
// Define a function getNumberSign that takes a number and 
// returns either 'zero', 'positive' or 'negative' depending on its sign:


const getNumberSign = (a) => {
  if (a === 0) {
    return "zero";
  } else if (a > 0) {
    return "positive";
  } else {
    return "negative";
  }
};
