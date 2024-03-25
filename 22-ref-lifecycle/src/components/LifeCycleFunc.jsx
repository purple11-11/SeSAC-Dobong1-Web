import { useEffect, useState } from "react";

function MyComponent({ number }) {
  const [text, setText] = useState("");

  //   useEffect(effect[, deps])
  /*
    - effect: callback function
        콜백 함수 내에 특정 시점(mount, update, unmount)에서 실행하고 싶은 코드 작성

    - deps : 해당 배열값이 변하면 cb 함수 실행
        생략 : mount, update 시 항상 동작
        [] : mount 될 때만 실행
        [data] : mount 되었을 때, data가 바뀌었을 때 실행
                (mount, update시 실행되는데 특정 조건에 의해 update 될 때 실행된다는 차이점이 있다.)
 */

  // mount 되었을 때
  useEffect(() => {
    console.log("함수형 컴포넌트 mount!");
  }, []);

  // unmount 되었을 때
  useEffect(() => {
    return () => {
      // unmount 시 실행하고 싶은 동작
      console.log("함수형 컴포넌트 unmount!");
    };
  });

  // mount, unmount 같이 사용할 수 도 있음
  /*   useEffect(() => {
    console.log("함수형 컴포넌트 mount!");

    return () => {
      // unmount 시 실행하고 싶은 동작
      console.log("함수형 컴포넌트 unmount!");
    };
  }); */

  // update 되었을 때
  useEffect(() => {
    console.log(`함수형 컴포넌트 | update 될 때마다 매번 실행!`);
  });

  useEffect(() => {
    console.log(`함수형 컴포넌트 | number 변경될 때만 실행!`);
  }, [number]);

  return (
    <>
      <p>My Component {number}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => setNumber(number + 1);

  const changeVisibleState = () => setVisible(!visible);
  return (
    <>
      <button onClick={changeNumberState}>number + 1</button>
      <button onClick={changeVisibleState}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
