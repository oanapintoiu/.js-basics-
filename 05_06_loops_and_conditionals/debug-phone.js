// https://github.com/makersacademy/javascript-fundamentals/blob/main/bites/05_conditionals.md#exercise-1


const isValidLength = (phoneNumber) => {
  const validLength = 11;
  if (phoneNumber.length === validLength) {
    return true;
  } else {
    return false;
  }
};
