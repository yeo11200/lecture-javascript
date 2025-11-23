function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function heavy() {
  // 50억의 반복문을 돌려야한다.
  // 1억 -> 50개
  // 5억 -> 10개 => chucking -> chuck -> 조각내면 브라우저가 숨을 쉴 수 있을겠죠?
  const max = 5_000_000_000;
  const chuck = 1_000_000_00;

  const end = max / chuck;

  for (let i = 0; i < end; i++) {
    // heavy work
    console.log("progress:", i);

    await wait();
  }

  console.log("done");
}

function 동기(x, y, z) {
  console.log("X", x);
  console.log("Y", y);
  console.log("Z", z);
  console.log(x + y + z);
}

heavy();

동기(1, 10, 5);
