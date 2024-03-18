// export default function FunctionState() {
//   let apple = "사과";

import { useState } from "react";

//   function inEnglish() {
//     apple = "apple";
//     console.log("apple 변수 값 ::", apple);
//   }
//   return (
//     <div>
//       <div style={{ backgroundColor: "red", color: "#fff" }}>{apple}</div>
//       <button onClick={inEnglish}>영어로 바꾸기</button>
//     </div>
//   );
// }

/* export default function FunctionState() {
  //   const [apple, setApple] = useState("사과"); // useState("초기화 값")

  function changeLanguage() {
    // setApple("apple");
    // console.log("apple state 값 ::", apple);

    // 3. 바닐라 js로 사과 > apple > 사과 변경해보기
    const text = document.querySelector(".appleText");
    text.textContent === "사과" ? (text.textContent = "apple") : (text.textContent = "사과");
  }
  return (
    <div>
      <div className="appleText" style={{ backgroundColor: "red", color: "#fff" }}>
        사과
      </div>
      <button onClick={changeLanguage}>언어 바꾸기</button>
    </div>
  );
} */

// 4. useState로 사과 > apple > 사과 변경
// 내가 푼 방법
// export default function FunctionState() {
//   const [text, setText] = useState("사과");

//   function changeLanguage() {
//     text === "사과" ? setText("apple") : setText("사과");
//   }

//   return (
//     <div>
//       <div style={{ backgroundColor: "red", color: "#fff" }}>{text}</div>
//       <button onClick={changeLanguage}>언어 바꾸기</button>
//     </div>
//   );
// }

// 리더님 방법
export default function FunctionState() {
  const [isEnglish, setIsEnglish] = useState(true);

  function changeLanguage() {
    setIsEnglish(!isEnglish); // true false 값에 따라 다르게 처리되게끔 not 연산자 사용
  }

  return (
    <div>
      <div style={{ backgroundColor: "red", color: "#fff" }}>{isEnglish ? "apple" : "사과"}</div>
      <button onClick={changeLanguage}>{isEnglish ? "한글" : "영어"}로 변경</button>
    </div>
  );
}
