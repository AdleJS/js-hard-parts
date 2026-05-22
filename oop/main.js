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
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };

  return newUser;
}

const user1 = userCreator("Ari", 3);
const user2 = userCreator("Jae", 5);

user1.increment();
console.log(user1);
console.log(user2);
