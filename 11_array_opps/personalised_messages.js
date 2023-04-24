const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

// const generateMessages = (names) => {
//    return names.map((name) => {
//        return `Hi ${name}! 50% off our best candies for you today!`;
//    });
//  };

// the above refactored

const generateMessages = (names) =>
  names.map((name) => `Hi ${name}! 50% off our best candies for you today!`);

const messages = generateMessages(names);
console.log(messages);
