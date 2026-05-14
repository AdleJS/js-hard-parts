const result = [1, 2, 3].map((input) => input * 2);
console.log(result);

const firstArr = [1, 2, 3];
const secondArr = [1, 2, 3];

// mutating functions
firstArr.reverse();
firstArr.splice(1, 1, 6);
firstArr.sort();
console.log(firstArr);

// non-mutating functions
const reversed = secondArr.toReversed();
const spliced = secondArr.toSpliced(1, 1, 6);
const sorted = secondArr.toSorted();
console.log(secondArr, reversed, spliced, sorted);

const flattened = [1, [1, [2, 3, 4], [1, 3], 4], [1, 2, 3]].flat(3);
console.log(flattened);

const expression = (num) => (num % 2 == 0 ? "even" : "odd");
const grouped = Object.groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9], expression);
console.log(grouped);
