const User = require('./user');
const UserBase = require('./userBase')

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

  const userBase = new UserBase(users);

  console.log(userBase.count());
  
  console.log(userBase.getNames());
  
  console.log(userBase.getIntroductions());