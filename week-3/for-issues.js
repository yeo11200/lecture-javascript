// var는 함수스코프로써, i인 함수 스코프를 공유한다.
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 4);
}

for (var z = 0; z < 5; z++) {
  ((j) => {
    setTimeout(() => {
      console.log(j);
    }, 4);
  })(z);
  // IIFE 호출 시점에 i의 값이 current로 복사된다.
}

// let은 블록스코프로써, 블록마다 새로운 j를 생성한다.
for (let j = 0; j < 5; j++) {
  setTimeout(() => {
    console.log(j);
  }, 4);
}
