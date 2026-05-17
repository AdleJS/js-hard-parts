const userStored = {
  name: "Will",
  id: 105,
};

const userSubmitted = {
  name: "Will",
  id: 105,
};

function onSubmit() {
  if (userSubmitted == userStored) {
    console.log("Submit");
  }

  if (+userSubmitted === +userStored) {
    console.log("primitives are equal");
  }
}

function coerce(hint) {
  if (hint === "string") return "user";
  if (hint === "number") return 105;
}

userStored[Symbol.toPrimitive] = coerce;
userSubmitted[Symbol.toPrimitive] = coerce;

onSubmit();

const anotherLink = userStored;
