// JS objects
const user = {
  name: "Ari",
  score: 3,
  increment: function () {
    user.score++;
  },
};

user.increment();
console.log(user);

const anotherUser = {};
anotherUser.name = "Jae";
anotherUser.score = 0;
anotherUser.increment = function () {
  anotherUser.score++;
};

anotherUser.increment();
console.log(anotherUser);

// Object.create
const yetAnotherUser = Object.create(null);
yetAnotherUser.name = "Tam";
yetAnotherUser.score = 9;
yetAnotherUser.increment = function () {
  yetAnotherUser.score++;
};

yetAnotherUser.increment();
console.log(yetAnotherUser);

// creating objects with function
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new userCreator("Ari", 3);
const user2 = new userCreator("Jae", 5);

user1.increment();
console.log(user1);
console.log(user2);
