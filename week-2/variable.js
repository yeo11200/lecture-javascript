var a = 1;
let b = 2;
const c = 3;

if (true) {
  var a = 2;
  let b = 3;
  const c = 4;
  console.log(a, b, c); // a=2, b=3, c=4
}

console.log(a, b); // a=2, b=2
