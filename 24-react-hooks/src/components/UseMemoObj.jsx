import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function UseMemoObj() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // [before] useMemo 사용 전 (object는 렌더링 될 때마다 주소값이 변경되기 때문에, useMemo를 사용해야한다.)
  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };

  // const loaction = isKorea ? "한국" : "외국"; // 문자열 처리 하는 방식을 가장 추천!

  // [after] useMemo 사용 (메모리에 부하를 주기 때문에 useMemo 사용은 지양)
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("location이 바뀔때마다 실행");
  }, [location]);

  return (
    <>
      <h3>useMemo Object</h3>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <div>{location.country}</div>
      <button onClick={() => setIsKorea(!isKorea)}>나라 바꾸기</button>
    </>
  );
}
