function closureHiding(name) {
  // private 변수 외부에서 접근 못함
  // 왜냐면 선언을 하지않았기 때문에
  var _score = 0;

  return {
    getter() {
      return _score;
    },
    setter() {
      _score++;
    },
    getName() {
      return name;
    },
  };
}

var say = closureHiding("Jin");
console.log(say.setter());

console.log(say.getter());
console.log(say._score);
