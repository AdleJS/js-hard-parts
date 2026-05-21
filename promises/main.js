function display(data) {
  console.log(data);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log("Me first!");
