// Challenge

// https://github.com/makersacademy/javascript-fundamentals/blob/main/bites/08_callbacks.md#challenge


let counter = 0;

const increment = () => {
  counter++;
  console.log(counter);
};

setInterval(increment, 1000);
