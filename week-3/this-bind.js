// function show(a, b) {
//   // arrow function에서는 없음
//   // console.log(arguments);
//   // const a = [...arguments];
//   // console.log(a);
//   console.log(this.a); // global
//   console.log(a, b);
// }

// show();
// // 명시적: call, apply, bind
// show.apply({ a: "title" }, [1, 2, 3, 4]);

say = {
  name: "Jinseop",
  Hi: function () {
    console.log(this);
    console.log(this.name);
  },
  arrow: () => {
    console.log(this);
    console.log(this.name);
  },
  // 렉시컬 this인데 person이 호출된 시점에 this가 결정되기 때문에 this가 상위 this가 된다.
  person: function () {
    const inner = () => {
      console.log(this);
      console.log(this.name);
    };
    inner();
  },
};

say.Hi();

// // arraw function은 상위를 바라보지만 일반함수 안에 써야 this가 사우이 스코프로 사용
say.arrow();

say.person();
