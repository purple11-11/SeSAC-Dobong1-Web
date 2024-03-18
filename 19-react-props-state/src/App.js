import "./App.css";
import { ClassProps, ClassProps2 } from "./components/ClassProps";
import { BestSeller, FoodComp, TextComp } from "./components/FoodComp";
import { FunctionProps, FunctionProps2 } from "./components/FunctionProps";

function App() {
  const ValidClick = () => {
    console.log("콘솔 띄우기 성공!");
  };
  return (
    <div className="App">
      <h1>hello, props</h1>
      <ClassProps name="루피" color="pink" nickname="공주" />
      <ClassProps name="뽀로로" color="blue" nickname="사고뭉치" />
      <ClassProps2
        name="포비"
        color="beige"
        nickname="곰"
        //  bgColor="black"
      />
      {/* 숫자는 중괄호에 담아 보냄 */}
      <FunctionProps name="사과" number={5} price={1000} />
      <FunctionProps2 price={50000} />
      <FunctionProps2>여기가 children props라고 입니다.</FunctionProps2>
      <FunctionProps2 price="10000" name="딸기">
        <section style={{ backgroundColor: "yellow" }}>
          <article>1</article>
          <article>2</article>
          <article>3</article>
        </section>
      </FunctionProps2>

      {/* 실습 1 */}
      <FoodComp food="초밥" color="red" />
      <FoodComp color="red" />

      {/* 실습 2 */}
      <BestSeller title="곰돌이 푸" author="외국사람" price="5,000" type="동화" />

      {/* 실습3 */}
      <TextComp text="App 컴포넌트의 text" valid={ValidClick} />
      <TextComp valid={ValidClick} />
    </div>
  );
}

export default App;
