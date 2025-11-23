/**
 * 클로저의 기본 개념
 * - 함수가 선언 될 때 자신이 정의된 스코프를 기억한다.
 * - inner 실행 될 때 outer는 이미 종료
 * - JS는 outer에 대한 렉시컬 환경을 기억 -> Closure
 * - 실행 컨텍스트 코드가 실행될 때 변수와 함수의 선언을 미리 수집하고 수집을 기반으로 실행에 대한 흐름을 관리한다.
 */
function outer() {
  var count = 0;
  function inner() {
    console.log(++count);
  }

  return inner;
}

const counter = outer(); // outer 실행 후 이미 종료됨

const counter2 = outer(); // outer 실행 후 이미 종료됨

counter();
counter();
counter2();
counter();
counter2();
