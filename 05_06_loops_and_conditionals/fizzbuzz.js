//PART 1
// Write a fizzBuzz function in JavaScript. As a reminder, this function should take a number as argument, and then either:

// Return "Fizz" if this number is divisible by 3.
// Return "Buzz" if this number is divisible by 5.
// Return "FizzBuzz" if this number is divisible by both 5 and 3.
// Otherwise, Return the number itself.

//PART 2
// This challenge builds on the previous one, where you defined a fizzBuzz function.

// Write a function fizzbuzzUntil that accepts a number.
//  This function should use a loop to loop through all numbers from 1 to the given one, 
// call the fizzBuzz function for the current number and print the result.

const FizzBuzz = (number) => {
  if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number;
  }
};

const FizzBuzzUntil = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(FizzBuzz(i));
  }
};

console.log(FizzBuzzUntil(15));
