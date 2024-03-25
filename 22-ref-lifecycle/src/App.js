import "./App.css";
import Container from "./components/Container";
import FakePosts from "./components/FackePost";
import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import PracticeLifeCycle from "./components/PracticeLifeCycle";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunction";

function App() {
  return (
    <>
      <h1>Ref</h1>
      {/* <RefClass1 />
      <RefClass2 />

      <RefFunc1 /> */}
      {/* <RefFunc2 /> */}

      <hr />

      <h1>Life Cycle</h1>
      {/* 클래스형 컴포넌트 */}
      {/* <LifeCycleClass /> */}
      {/* 함수형 컴포넌트 */}
      {/* <LifeCycleFunc /> */}

      <h3>Life Cycle 실습</h3>
      <Container>
        {/* <FakePosts /> */}
        <PracticeLifeCycle />
      </Container>
    </>
  );
}

export default App;
