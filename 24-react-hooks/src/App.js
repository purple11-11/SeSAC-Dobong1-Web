import UseMemo from "./components/UseMemo";
import UseMemoObj from "./components/UseMemoObj";
import UseCallback from "./components/UseCallback";
import UseCallback2 from "./components/UseCallback2";
import UseReducer from "./components/UseReducer";
import useTitle from "./hooks/useTitle";
import CustomHook from "./components/CustomHook";
import Form from "./components/Form";
import PracticeForm from "./components/PracticeForm";

function App() {
  useTitle("React Hooks!");
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <UseMemo /> */}

      {/* <UseMemoObj /> */}

      {/* <UseCallback /> */}

      {/* <UseCallback2 /> */}

      <UseReducer />

      <CustomHook />

      <Form />

      <PracticeForm />
    </div>
  );
}

export default App;
