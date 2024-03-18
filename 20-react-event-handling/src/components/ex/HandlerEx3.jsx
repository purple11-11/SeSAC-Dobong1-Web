import { useState } from "react";

export default function HandlerEx3() {
  const [show, setShow] = useState(true);

  const changeBtn = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={changeBtn}>{show ? "사라져라" : "보여라"}</button>
      <h1>{show ? "안녕하세요" : ""}</h1>
    </div>
  );
}
