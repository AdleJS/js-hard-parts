/*
- each variable declaration and assignment creates memory footprints in global JS memory
- JS has execution context that run javascript code line by line
- calling the function creates new local execution context inside the global JS execution context
- calling the function also is tracked in callstack, eah function call fills callstack and returning from function 
  frees space in callstack.
*/

const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);
