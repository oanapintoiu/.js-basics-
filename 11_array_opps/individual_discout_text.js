
const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];





const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const generateMessages = () => {
//    return namesAndDiscounts.map((object) => {
//        return `Hi ${object.name}! ${object.discount}% off our best candies for you today!`;
//    });
//  };

// the above refactored 

const generateMessages = (namesAndDiscounts) => namesAndDiscounts.map(object => `Hi ${object.name}! ${object.discount}% off our best candies for you today!`);

const text = generateMessages(namesAndDiscounts);
console.log(text);

