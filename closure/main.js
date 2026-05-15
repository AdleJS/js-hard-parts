function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

function outer() {
  let counter = 0;

  function add1() {
    counter++;
  }

  return add1;
}

const generatedFunc = createFunction();
const result = generatedFunc(3);
console.log(result);

// this closures have separate couter variable
const newFunc = outer();
newFunc();
newFunc();

const anotherFunc = outer();
anotherFunc();
anotherFunc();
