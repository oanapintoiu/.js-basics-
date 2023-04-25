// Use a for loop to iterate numbers from 1 to 20, 
// and for each of them, print whether the number is even or odd.

// You should get the following output:

// 1 is odd
// 2 is even
// 3 is odd
// (...)

for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    console.log(number + " is even");
  } else {
    console.log(number + " is odd");
  }
}
