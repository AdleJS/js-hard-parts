class UserCreator {
  loggedIn = false;

  static #count = 0;

  static describe() {
    console.log("Creates users");
  }

  constructor(name, score) {
    if (UserCreator.#count >= 2) {
      throw new Error("Max users reached");
    }

    this.name = name;
    this.score = score;
    UserCreator.#count++;
  }

  increment() {
    this.score++;
  }

  login() {
    console.log("login");
  }
}

const user = new UserCreator("Ari", 1);
UserCreator.describe();
console.log(user);

const anotherUser = new UserCreator("Jae", 5);
console.log(anotherUser);

const yetAnotherUser = new UserCreator("Tam", 9);
console.log(yetAnotherUser);
