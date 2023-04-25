// https://github.com/makersacademy/javascript-fundamentals/blob/main/bites/12_classes.md#exercise-1


class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => user.getName());
  }

  getIntroductions() {
    return this.users.map((user) => user.getIntroduction());
  }
}

module.exports = UserBase;
