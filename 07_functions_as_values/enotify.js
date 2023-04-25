// Challenge

// https://github.com/makersacademy/javascript-fundamentals/blob/main/bites/07_functions_as_values.md#challenge

const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
};

const notifyByText = (phoneNumber) => {
  return `Text sent to: ${phoneNumber}`;
};

const notify = (contact, notifyFunction) => {
  return notifyFunction(contact);
};

console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("+10000000000", notifyByText));
