// math operators type coercion
const price = 7;
let quantity = "3";
let donation = "10";
const max = 10;
let total;

function onSubmit() {
  if (quantity) {
    total = +price * +quantity + +donation;
    console.log(total);
  } else {
    console.log("Add items!");
  }
}

onSubmit();
