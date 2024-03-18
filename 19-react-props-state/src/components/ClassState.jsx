import { Component } from "react";
class ClassState extends Component {
  //   constructor(props) { // 옛날 방식
  //     // 상속 받아 오는 것이 props에 담겨있음
  //     super(props);

  //     this.state = {
  //       banana: "바나나",
  //     };
  //   }

  // 클래스형은 state 객체 안에서 여러개를 나열해야하는 불편함 있음
  state = {
    banana: "바나나",
  };

  render() {
    const { banana } = this.state;
    return (
      <div>
        <div style={{ color: "yellow", backgroundColor: "black", fontWeight: "700" }}>{banana}</div>
        {/* Component 에서 제공하는 setState 함수 사용 */}
        <button
          onClick={() => {
            this.setState({ banana: "banana" });
          }}
        >
          영어로 변경!
        </button>
      </div>
    );
  }
}

export default ClassState;
