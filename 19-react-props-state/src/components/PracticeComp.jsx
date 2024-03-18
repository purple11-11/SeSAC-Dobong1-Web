import { useState } from "react";

// 실습 1. 함수형 컴포넌트
export function PracticeComp() {
  const [number, setNumber] = useState(0);
  let variable = 0;
  // state가 변경되면 컴포넌트가 재렌더링 됨 -> state 변경되면 variable은 다시 0으로 초기화 됨!
  //  => console.log(variable)의 경우 increase()는 1로, decrease()는 -2 로 항상 값이 찍히게 된다
  function increase() {
    setNumber(number + 1);
    variable += 1;
    console.log(`변수(variable): ${variable}, State(number): ${number}`);
  }

  function decrease() {
    setNumber(number - 2);
    variable -= 2;
    console.log(`변수(variable): ${variable}, State(number): ${number}`);
  }

  return (
    <div>
      <div>{number}</div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}

// 추가 실습 1.
export function PracticeComp2() {
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }

  function decrease() {
    setNumber(number - 1);
  }

  return (
    <div>
      <div>
        {number}
        {number > 7 ? "😈" : "😊"}
      </div>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
}
