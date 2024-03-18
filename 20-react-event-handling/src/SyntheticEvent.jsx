function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log("e ::", e);
    console.log("e.target ::", e.target);
  }
  function printInputValue(e) {
    console.log("e ::", e);
    console.log("e.target ::", e.target);
    console.log("e.target.value ::", e.target.value);
  }
  return (
    <div>
      <button onClick={syntheticEvent}>클릭 이벤트 콘솔에 찍기</button>
      <br />
      <input type="text" placeholder="입력" onChange={printInputValue} />
    </div>
  );
}

export default SyntheticEvent;
