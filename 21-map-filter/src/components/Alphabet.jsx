import { useState } from "react";

export default function Alphabet() {
  const [list, setList] = useState([
    { id: 1, alpha: "a" },
    { id: 2, alpha: "b" },
    { id: 3, alpha: "c" },
    { id: 4, alpha: "d" },
    { id: 5, alpha: "e" },
  ]);

  const [inputAlpha, setInputAlpha] = useState("");

  const addAlpha = () => {
    if (inputAlpha.trim().length === 0) return;
    const newAlpha = list.concat({
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      alpha: inputAlpha,
    });
    setList(newAlpha);
    setInputAlpha("");
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addAlpha();
    }
  };

  const deleteAlpha = (id) => {
    const newAlpha = list.filter((alpha) => alpha.id !== id); // id와 일치하지 않는 값만 newAlpha 배열에 넣기
    setList(newAlpha);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        value={inputAlpha}
        onKeyDown={(e) => {
          activeEnter(e);
        }}
      />
      <button onClick={addAlpha}>add alphabet</button>
      <ol>
        {list?.map((alphabet) => {
          return (
            <li
              key={alphabet.id}
              onDoubleClick={() => {
                deleteAlpha(alphabet.id);
              }}
            >
              {alphabet.alpha}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
