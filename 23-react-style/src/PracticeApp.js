import Practice1 from "./components/Practice1";
import Practice2 from "./components/Practice2";
import PracticeLifeCycle from "./components/PracticeLifeCycle";

export default function PracticeApp() {
  return (
    <div className="App">
      <h1>Style 실습</h1>
      <h2>SCSS 실습 1번</h2>
      {/* <Practice1 /> */}

      <h2>SCSS 실습 2번</h2>
      <Practice2 />

      <h2>SCSS 실습 3번</h2>
      <PracticeLifeCycle />
    </div>
  );
}
