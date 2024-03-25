import { useCallback } from "react";
import { useState } from "react";

export default function UseCallback2() {
  const [text, setText] = useState("");

  // input에 입력하는 값이 변경될 때마다 렌더링 됨
  // 리렌더 될 때마다 새롭게 이벤트핸들러 함수가 생성
  /* const onChangeText = (e) => {
    setText(e.target.value);
  }; */

  // 반복되는 이벤트 핸들러 함수 >> useCallback을
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  return (
    <>
      <h3>useCallback2</h3>
      <input type="text" onChange={onChangeText} />
      <p>작성한 값:{text}</p>
    </>
  );
}
