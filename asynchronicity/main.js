function printHello() {
  console.log("Hello");
}

function blockForSec() {
  for (let i = 0; i <= 10000000000; i++) {
    continue;
  }
  console.log("finished");
}
setTimeout(printHello, 0);
blockForSec();

console.log("Me first!");
