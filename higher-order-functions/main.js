function copyArrayAndMultiplyBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }

  return output;
}

function copyArrayAndDivideBy2(array) {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2);
  }

  return output;
}

function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }

  return output;
}

const multiplyBy2 = (input) => input * 2;

const myArray = [1, 2, 3];

const result = copyArrayAndMultiplyBy2(myArray);
const anotherResult = copyArrayAndDivideBy2(myArray);
const yetAnotherResult = copyArrayAndManipulate(myArray, multiplyBy2);

console.log(yetAnotherResult);
