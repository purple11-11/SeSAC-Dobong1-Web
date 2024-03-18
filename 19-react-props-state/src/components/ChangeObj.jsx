import { useState } from "react";

export default function ChangeObj(props) {
  const { objArr } = props;
  //   console.log(objArr);
  const [index, setIndex] = useState(0);
  const member = objArr[index];

  function changeMember() {
    setIndex((prevIndex) => (prevIndex + 1) % objArr.length);
  }

  return (
    <div>
      이름: {member.name} <br />
      나이: {member.age} <br />
      별명: {member.nickName} <br />
      <button onClick={changeMember}>멤버 바꾸기</button>
    </div>
  );
}
