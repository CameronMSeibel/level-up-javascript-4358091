// Write your code here

class User {
  #username;
  #password;
  constructor(username, password, age) {
    this.#username = username;
    this.#password = password;
    this.age = age;
  }
}

const user = new User("cmseibel", "12345", 27);
console.log(user.username);
console.log(user.password);

// Oh, per the video:
const username = Symbol("username");
const password = Symbol("password");

const user2 = {
  [username]: "cmseibel",
  [password]: "password123",
  age: 27
};
console.log(user2.username);
console.log(user2.password);