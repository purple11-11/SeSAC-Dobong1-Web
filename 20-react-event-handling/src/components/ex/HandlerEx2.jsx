import { useState } from "react";

export default function HandlerEx2() {
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  const changeText = (color) => {
    setColor(color);
    color === "red" ? setText("빨간색 글씨") : setText("파란색 글씨");
  };

  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1> <br />
      <button
        onClick={() => {
          changeText("red");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          changeText("blue");
        }}
      >
        파란색
      </button>
    </div>
  );
}
