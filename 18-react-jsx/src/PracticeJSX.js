export default function PracticeJSX() {
  const name = "로이";
  const animal = "강아지";

  const a = 5,
    b = 2;

  const title = "Hello World";
  return (
    <div style={{ fontWeight: 700 }}>
      {/* 실습1. */}
      <div>
        제 반려 동물의 이름은 <u>{name}</u>입니다.
      </div>
      <div>
        <u>{name}</u>은(는) <u>{animal}</u>입니다.
      </div>

      <br />

      {/* 실습2. */}
      <div>{3 + 5 === 8 ? "정답입니다!" : "오답입니다!"}</div>

      <br />

      {/* 실습3. */}
      <div>{a > b && "a가 b 보다 큽니다"}</div>

      <br />

      {/* 실습4.  */}
      <div className="title">{title}</div>
      <div className="id">
        <div>아이디 : </div>
        <input />
      </div>
      <div className="pw">
        <div>비밀번호 : </div>
        <input />
      </div>
    </div>
  );
}
