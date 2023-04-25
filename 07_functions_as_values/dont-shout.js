// Declare a function lowercaseMessage that returns the lowercase version of the given string.

// Declare a function transform that behaves like the one above:

// takes one string and one function as arguments
// calls the function on the given string.
// Call transform by giving it the string 'WHY ARE YOU SHOUTING?'
//  and the function lowercaseMessage. It should 
// return a lowercase version of the message ('why are you shouting?')


const uppercaseMessage = (message) => {
  return message.toUpperCase();
};

const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
  return transformFunction(message);
};

console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));

console.log(transform("shout!", uppercaseMessage));
