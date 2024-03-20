import { useState } from "react";

export default function PracticeMap() {
  const [list, setList] = useState([
    { id: 1, name: "코디", email: "codi@gmail.com" },
    { id: 2, name: "윤소희", email: "yoonsohee@gmail.com" },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 실제 등록하는 함수
  /* 
    - list state를 변경시켜 재랜더링되도록
    - 빈값이 입력되면 alert 띄우기
    - 등록 후에 input 빈칸 만들기
   */
  const addData = () => {
    if (name.trim().length === 0 || email.trim().length === 0) {
      alert("이메일과 이름 모두 작성해주세요.");
      return;
    }
    setList(
      list.concat({
        id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
        name,
        email,
      })
    );
    setName("");
    setEmail("");
  };

  // 엔터로 등록하는 함수
  /* 
    - 두 번째 input[type="email"]에 Enter 쳤을 때 등록 되도록 
   */
  const activeEnter = (e) => {
    if (e.key === "Enter") {
      addData();
    }
  };

  // 더블클릭 했을 때 삭제 함수
  /*
    -  
   */
  const deleteData = (id) => {
    const newData = list.filter((data) => data.id !== id);
    setList(newData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        onKeyDown={activeEnter}
      />
      <button onClick={addData}>등록</button>
      {list?.map((el) => {
        return (
          <h4
            key={el.id}
            style={{ fontWeight: 700, margin: "10px 0" }}
            onDoubleClick={() => {
              deleteData(el.id);
            }}
          >
            {el.name}: {el.email}
          </h4>
        );
      })}
    </div>
  );
}
