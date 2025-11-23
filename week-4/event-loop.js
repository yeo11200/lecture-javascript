// "A"는 즉시 출력
// "B"는 microtask로 출력
// "C"는 macrotask로 출력

console.log("A");

setTimeout(function () {
  console.log("B");
});

Promise.resolve().then(() => {
  console.log("C");
});
