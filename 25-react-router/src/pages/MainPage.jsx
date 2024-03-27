import { useSearchParams } from "react-router-dom";

export function MainPage() {
  const [modeParams, setModeParams] = useSearchParams();
  // console.log(modeParams.get("mode")); // key 값 문자열로 get => dark
  const mode = modeParams.get("mode");
  return (
    // <main className={mode === "dark" ? "MainPage dark" : "MainPage"}> // 삼항 연산자로 dark 클래스 추가
    <main className={`MainPage ${modeParams.get("mode")}`}>
      <h2>여기는 HOME 입니다.</h2>
      <button onClick={() => setModeParams({ mode: "dark" })}>
        {mode === "dark" ? "Light mode" : "Dark mode"}
      </button>
    </main>
  );
}
