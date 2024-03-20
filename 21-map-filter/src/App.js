import "./App.css";
import PracticeSearch from "./components/PracticeSearch";
import PracticeMap from "./components/PracticeMap";
import Alphabet from "./components/Alphabet";
import PropsMap from "./components/PropsMap";

function App() {
  const dataArr = [
    { name: "peach", number: 5, price: 5000 },
    { name: "banana", number: 1, price: 3000 },
    { name: "apple", number: 10, price: 7000 },
    { name: "grape", number: 2, price: 8500 },
  ];

  return (
    <>
      <h1>map과 filter</h1>
      <h2>수업) map</h2>
      <PropsMap arr={dataArr} />
      <br />
      <br />

      <h2>수업) map & filter</h2>
      <h4>새로운 알파벳 추가 & 더블 클릭으로 삭제</h4>
      <Alphabet />
      <br />
      <br />

      {/* map 실습 */}
      <h2>실습) map & filter</h2>
      <PracticeMap />
      <br />
      <br />

      <h2>실습 2) map & filter </h2>
      <PracticeSearch />
    </>
  );
}

export default App;
