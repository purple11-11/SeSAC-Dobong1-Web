// import './App.css';

import Counter from "./Counter";
import SyntheticEvent from "./SyntheticEvent";
import HandlerEx from "./components/ex/HandlerEx";
import HandlerEx2 from "./components/ex/HandlerEx2";
import HandlerEx3 from "./components/ex/HandlerEx3";

function App() {
  return (
    <div>
      <h1>합성 이벤트</h1>
      <SyntheticEvent />

      <Counter />

      <h1>실습 1</h1>
      <HandlerEx />
      <hr />

      <h1>실습 2</h1>
      <HandlerEx2 />
      <hr />

      <h1>실습 3</h1>
      <HandlerEx3 />
      <hr />
    </div>
  );
}

export default App;
