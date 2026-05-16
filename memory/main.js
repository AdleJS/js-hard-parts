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
}

onSubmit();

const anotherLink = userStored;
