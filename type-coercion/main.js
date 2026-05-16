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

// toPrimitive coercion
const time1 = new Date();
const time2 = new Date();

const month = "jan";
time1[month] = true;
time2[month] = true;

if (time2 - time1 < 2000) {
  console.log("Accident?");
}
