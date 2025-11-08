// 전역 변수
let a = 10;

// 전역 함수
function outer() {
  console.log("outer 함수 실행", this);
  // outer 함수 실행 컨텍스트
  let b = 20;
  console.log(a, b); // 10 20
  // inner 함수
  function inner() {
    console.log("inner 함수 실행", this);
    // inner 함수 실행 컨텍스트
    let c = 30;
    console.log(a, b, c); // 10 20 30
  }
  inner();
}

// console.log(b);
// outer 함수 실행 컨텍스트 출발
outer();
