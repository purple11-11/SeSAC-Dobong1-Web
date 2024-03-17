import ClassComp from "./ClassComp";

export default function UseJSX() {
  /* 1. 인라인 스타일 적용 */
  //   const divStyle = {
  //     width: "100px",
  //     height: "100px",
  //     backgroundColor: "gray",
  //     textAlign: "center",
  //     color: "green",
  //     marginTop: ".5rem",
  //     display: "inline-block",
  //     border: "1px solid red",
  //   };

  //   return (
  //     <div>
  //       <div style={{ color: "#fff", width: "100px", backgroundColor: "crimson" }}> first </div>
  //       <div style={divStyle}>second</div>
  //       <div style={divStyle}>third</div>
  //       <div style={divStyle}>fourth</div>
  //     </div>
  //   );

  /* 2. js 문법 사용해보기 */
  let isShow = false;
  function myFunc() {
    alert("hi");
  }
  function addNum(a, b) {
    alert(a + b);
  }
  return (
    <div>
      {/* <span>{myFunc()}</span> */}
      <div
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          alert("눌렸습니다.");
        }}
      >
        {isShow ? "true일때보임" : "!!!"}
      </div>
      <div style={{ backgroundColor: "red" }}>{isShow && "true일때보임"}</div>
      <div style={{ backgroundColor: "skyblue" }} onClick={myFunc}>
        {isShow === false ? "isShow가 false이군요!" : "true 이군요!"}
      </div>
      <div style={{ backgroundColor: "purple" }}>{!isShow && "false일때 보임"}</div>
      <div onClick={() => addNum(8, 5)}>8더하기 5의 결과를 alert로 확인</div>
      <div onClick={() => myFunc()}>myFunc실행</div>
      <br />
      <ClassComp />
      <br />
      <hr />
      <div className="div"></div>
    </div>
  );
}
