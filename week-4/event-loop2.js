// 아래 함수 printSequence를 수정하여
// “A” → “B” → “C” → “D” 순서로 출력되도록 코드를 작성하시오.

async function printSequence() {
  console.log("A");

  /* TODO: "B"는 Promise(microtask)로 출력 */
  Promise.resolve().then(() => {
    console.log("B");
  });
  /* TODO: "C"는 setTimeout(macrotask)로 출력 */
  setTimeout(() => {
    console.log("C");
    console.log("D");
  });
}

printSequence();
