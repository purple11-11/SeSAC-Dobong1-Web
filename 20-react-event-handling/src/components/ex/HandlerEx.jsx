import { useState } from "react";

export default function HandlerEx() {
  const [text, setText] = useState("Hello World!");

  const changeText = () => {
    setText("Goodby World!");
  };

  return (
    <div>
      {text}
      <button onClick={changeText}>클릭</button>
    </div>
  );
}
