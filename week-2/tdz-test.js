// var vs let (TDZ/호이스팅 차이)
// var는 호이스팅이 되지만, 선언과 초기가 같이 된다!
console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError
// let는 호이스팅은 되고, 선언과 초기화가 분리되어있다! TDZ 구간이 있다!
let b = 2;
console.log(b); // 2
