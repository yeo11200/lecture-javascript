function first() {
  second();
  console.log("first");
}
function second() {
  third();
  console.log("second");
}
function third() {
  console.log("third");
}
first();

// first -> second -> third -> console.log("third"); -> console.log("second"); -> console.log("first");