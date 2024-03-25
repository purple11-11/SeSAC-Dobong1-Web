import { useMemo } from "react";
import { useState } from "react";

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // [before] useMemo 사용 전 (함수)
  /* const calc = () => {
    console.log("calculate..");

    return count * 2;
  }; */

  // [after] useMemo 사용 (변수)
  const calc = useMemo(() => {
    console.log("calculate....");
    // useMemo는 반드시 return이 있어야 한다!
    return count * 2;
  }, [count]);

  return (
    <>
      <h3>useMemo</h3>
      {/* state 변경 비교를 위한 아무런 태그인 input */}
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      {/* <p>{calc()}</p> */}
      <p>{calc}</p>
    </>
  );
}
